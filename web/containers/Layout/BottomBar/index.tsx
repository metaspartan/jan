import { useEffect } from 'react'

import {
  Badge,
  Button,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from '@janhq/uikit'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'

import { FaGithub, FaDiscord } from 'react-icons/fa'

import DownloadingState from '@/containers/Layout/BottomBar/DownloadingState'

import SystemItem from '@/containers/Layout/BottomBar/SystemItem'
import CommandListDownloadedModel from '@/containers/Layout/TopBar/CommandListDownloadedModel'
import ProgressBar from '@/containers/ProgressBar'

import { appDownloadProgress } from '@/containers/Providers/Jotai'

import { showSelectModelModalAtom } from '@/containers/Providers/KeyListener'
import ShortCut from '@/containers/Shortcut'

import { MainViewState } from '@/constants/screens'

import { useActiveModel } from '@/hooks/useActiveModel'

import { modelDownloadStateAtom } from '@/hooks/useDownloadState'
import useGetSystemResources from '@/hooks/useGetSystemResources'
import { useMainViewState } from '@/hooks/useMainViewState'

import { serverEnabledAtom } from '@/helpers/atoms/LocalServer.atom'
import { downloadedModelsAtom } from '@/helpers/atoms/Model.atom'
import {
  cpuUsageAtom,
  gpusAtom,
  ramUtilitizedAtom,
} from '@/helpers/atoms/SystemBar.atom'

const menuLinks = [
  {
    name: 'Discord',
    icon: <FaDiscord size={20} className="flex-shrink-0" />,
    link: 'https://discord.gg/FTk2MvZwJH',
  },
  {
    name: 'Github',
    icon: <FaGithub size={16} className="flex-shrink-0" />,
    link: 'https://github.com/janhq/jan',
  },
]

const BottomBar = () => {
  const { activeModel, stateModel } = useActiveModel()
  const { watch, stopWatching } = useGetSystemResources()
  const progress = useAtomValue(appDownloadProgress)
  const downloadedModels = useAtomValue(downloadedModelsAtom)
  const gpus = useAtomValue(gpusAtom)
  const cpu = useAtomValue(cpuUsageAtom)
  const ramUtilitized = useAtomValue(ramUtilitizedAtom)

  const { setMainViewState } = useMainViewState()
  const downloadStates = useAtomValue(modelDownloadStateAtom)
  const setShowSelectModelModal = useSetAtom(showSelectModelModalAtom)
  const [serverEnabled] = useAtom(serverEnabledAtom)

  const calculateUtilization = () => {
    let sum = 0
    const util = gpus.map((x) => {
      return Number(x['utilization'])
    })
    util.forEach((num) => {
      sum += num
    })
    return sum
  }

  useEffect(() => {
    // Watch for resource update
    watch()

    return () => {
      stopWatching()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="fixed bottom-0 left-16 z-20 flex h-12 w-[calc(100%-64px)] items-center justify-between border-t border-border bg-background/80 px-3">
      <div className="flex flex-shrink-0 items-center gap-x-2">
        <div className="flex items-center space-x-2">
          {progress && progress > 0 ? (
            <ProgressBar total={100} used={progress} />
          ) : null}
        </div>

        {!serverEnabled && (
          <Badge
            themes="secondary"
            className="cursor-pointer rounded-md border-none font-medium"
            onClick={() => setShowSelectModelModal((show) => !show)}
          >
            My Models
            <ShortCut menu="E" />
          </Badge>
        )}

        {stateModel.state === 'start' && stateModel.loading && (
          <SystemItem
            titleBold
            name="Starting"
            value={stateModel.model || '-'}
          />
        )}
        {stateModel.state === 'stop' && stateModel.loading && (
          <SystemItem
            titleBold
            name="Stopping"
            value={stateModel.model || '-'}
          />
        )}
        {!stateModel.loading &&
          downloadedModels.length !== 0 &&
          activeModel?.id && (
            <SystemItem
              titleBold
              name={'Active model'}
              value={activeModel?.id}
            />
          )}
        {downloadedModels.length === 0 &&
          !stateModel.loading &&
          Object.values(downloadStates).length === 0 && (
            <Button
              size="sm"
              themes="outline"
              onClick={() => setMainViewState(MainViewState.Hub)}
            >
              Download your first model
            </Button>
          )}

        <DownloadingState />
      </div>
      <div className="flex items-center gap-x-3">
        <div className="flex items-center gap-x-2">
          <SystemItem name="CPU:" value={`${cpu}%`} />
          <SystemItem name="Mem:" value={`${ramUtilitized}%`} />
        </div>
        {gpus.length > 0 && (
          <Tooltip>
            <TooltipTrigger>
              <div className="flex cursor-pointer items-center">
                <SystemItem
                  name={`${gpus.length} GPU `}
                  value={`${calculateUtilization()}% `}
                />
              </div>
            </TooltipTrigger>
            {gpus.length > 1 && (
              <TooltipContent
                side="top"
                sideOffset={10}
                className="min-w-[240px]"
              >
                <span>
                  {gpus.map((gpu, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <span>{gpu.name}</span>
                        <span>{gpu.vram}MB VRAM</span>
                      </div>
                      <span>{gpu.utilization}%</span>
                    </div>
                  ))}
                </span>
                <TooltipArrow />
              </TooltipContent>
            )}
          </Tooltip>
        )}
        {/* VERSION is defined by webpack, please see next.config.js */}
        <span className="text-xs text-muted-foreground">
          Jan v{VERSION ?? ''}
        </span>
        <div className="mt-1 flex items-center gap-x-2">
          {menuLinks
            .filter((link) => !!link)
            .map((link, i) => (
              <div className="relative" key={i}>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex w-full flex-shrink-0 cursor-pointer items-center justify-center"
                    >
                      {link.icon}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="top" sideOffset={10}>
                    <span>{link.name}</span>
                    <TooltipArrow />
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
        </div>
      </div>
      <CommandListDownloadedModel />
    </div>
  )
}

export default BottomBar
