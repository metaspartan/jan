import { useCallback, useRef } from 'react'

import {
  ChatCompletionMessage,
  ChatCompletionRole,
  ConversationalExtension,
  ExtensionTypeEnum,
  MessageRequest,
  MessageRequestType,
  MessageStatus,
  Thread,
  ThreadMessage,
  events,
  MessageEvent,
  ContentType,
} from '@janhq/core'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'

import { ulid } from 'ulid'

import { toRuntimeParams, toSettingParams } from '@/utils/modelParam'

import { useActiveModel } from './useActiveModel'
import { queuedMessageAtom, reloadModelAtom } from './useSendChatMessage'

import { extensionManager } from '@/extension'
import {
  addNewMessageAtom,
  getCurrentChatMessagesAtom,
} from '@/helpers/atoms/ChatMessage.atom'
import {
  activeThreadAtom,
  engineParamsUpdateAtom,
  getActiveThreadModelParamsAtom,
  isGeneratingResponseAtom,
  updateThreadAtom,
  updateThreadWaitingForResponseAtom,
} from '@/helpers/atoms/Thread.atom'

export default function useChatMessage() {
  const activeThread = useAtomValue(activeThreadAtom)
  const [engineParamsUpdate, setEngineParamsUpdate] = useAtom(
    engineParamsUpdateAtom
  )
  const activeModelParams = useAtomValue(getActiveThreadModelParamsAtom)
  const currentMessages = useAtomValue(getCurrentChatMessagesAtom)

  const setIsGeneratingResponse = useSetAtom(isGeneratingResponseAtom)
  const updateThreadWaiting = useSetAtom(updateThreadWaitingForResponseAtom)
  const setReloadModel = useSetAtom(reloadModelAtom)
  const addNewMessage = useSetAtom(addNewMessageAtom)

  const updateThread = useSetAtom(updateThreadAtom)
  const setQueuedMessage = useSetAtom(queuedMessageAtom)
  const { activeModel, startModel } = useActiveModel()
  // TODO: should use better way
  const isInMiddleSendingMessage = useRef(false)

  const sendQuickAskMessage = useCallback(
    async (message: string) => {
      console.log(
        'sendQuickAskMessage',
        message,
        isInMiddleSendingMessage.current
      )
      if (!activeThread) return
      if (isInMiddleSendingMessage.current) return
      setIsGeneratingResponse(true)
      updateThreadWaiting(activeThread.id, true)

      if (engineParamsUpdate) setReloadModel(true)

      const runtimeParams = toRuntimeParams(activeModelParams)
      const settingParams = toSettingParams(activeModelParams)

      updateThreadWaiting(activeThread.id, true)
      const msgId = ulid()

      const messages: ChatCompletionMessage[] = [
        activeThread.assistants[0]?.instructions,
      ]
        .filter((e) => e && e.trim() !== '')
        .map<ChatCompletionMessage>((instructions) => {
          const systemMessage: ChatCompletionMessage = {
            role: ChatCompletionRole.System,
            content: instructions,
          }
          return systemMessage
        })
        .concat(
          currentMessages
            .map<ChatCompletionMessage>((msg) => ({
              role: msg.role,
              content: msg.content[0]?.text.value ?? '',
            }))
            .concat([
              {
                role: ChatCompletionRole.User,
                content: message,
              } as ChatCompletionMessage,
            ])
        )

      const modelRequest = activeThread.assistants[0].model
      if (runtimeParams.stream == null) {
        runtimeParams.stream = true
      }

      const messageRequest: MessageRequest = {
        id: msgId,
        type: MessageRequestType.Thread,
        threadId: activeThread.id,
        messages,
        model: {
          ...modelRequest,
          settings: settingParams,
          parameters: runtimeParams,
        },
        thread: activeThread,
      }

      const timestamp = Date.now()

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const content: any = []
      content.push({
        type: ContentType.Text,
        text: {
          value: message,
          annotations: [],
        },
      })

      const threadMessage: ThreadMessage = {
        id: msgId,
        thread_id: activeThread.id,
        role: ChatCompletionRole.User,
        status: MessageStatus.Ready,
        created: timestamp,
        updated: timestamp,
        object: 'thread.message',
        content: content,
      }

      const updatedThread: Thread = {
        ...activeThread,
        updated: timestamp,
        metadata: {
          ...(activeThread.metadata ?? {}),
          lastMessage: prompt,
        },
      }

      addNewMessage(threadMessage)

      // change last update thread when send message
      updateThread(updatedThread)

      await extensionManager
        .get<ConversationalExtension>(ExtensionTypeEnum.Conversational)
        ?.addNewMessage(threadMessage)

      const modelId = activeThread.assistants[0].model.id //selectedModel?.id ??

      if (activeModel?.id !== modelId) {
        setQueuedMessage(true)
        startModel(modelId)
        await waitForModelStarting(modelId)
        setQueuedMessage(false)
      }

      events.emit(MessageEvent.OnMessageSent, messageRequest)

      setReloadModel(false)
      setEngineParamsUpdate(false)

      isInMiddleSendingMessage.current = false
    },

    [activeThread, activeModel]
  )

  const waitForModelStarting = async (modelId: string) => {
    // return new Promise<void>((resolve) => {
    //   setTimeout(async () => {
    //     if (modelRef.current?.id !== modelId && !loadModelFailedRef.current) {
    //       await waitForModelStarting(modelId)
    //       resolve()
    //     } else {
    //       resolve()
    //     }
    //   }, 200)
    // })
  }

  return { sendQuickAskMessage }
}
