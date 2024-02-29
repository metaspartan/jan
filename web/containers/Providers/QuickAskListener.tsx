import { Fragment, ReactNode, useRef } from 'react'

import useSendChatMessage from '@/hooks/useSendChatMessage'

type Props = {
  children: ReactNode
}

const QuickAskListener: React.FC<Props> = ({ children }) => {
  const { sendChatMessage } = useSendChatMessage()
  const previousMessage = useRef('')

  window.electronAPI.onUserSubmitQuickAsk((_event: string, input: string) => {
    if (previousMessage.current === input) return
    sendChatMessage(input)
    previousMessage.current = input
  })

  return <Fragment>{children}</Fragment>
}

export default QuickAskListener
