'use client'

import {
  useContext,
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
} from 'react'

import { openExternalUrl, fs } from '@janhq/core'

import {
  Switch,
  Button,
  Input,
  Select,
  Checkbox,
  SelectContent,
  SelectGroup,
  SelectPortal,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from '@janhq/uikit'

import { AlertTriangleIcon, AlertCircleIcon } from 'lucide-react'

import ShortcutModal from '@/containers/ShortcutModal'

import { snackbar, toaster } from '@/containers/Toast'

import { FeatureToggleContext } from '@/context/FeatureToggle'

import { useActiveModel } from '@/hooks/useActiveModel'
import { useSettings } from '@/hooks/useSettings'

import DataFolder from './DataFolder'
import FactoryReset from './FactoryReset'

type GPU = {
  id: string
  vram: number | null
  name: string
}

const Advanced = () => {
  const {
    experimentalFeature,
    setExperimentalFeature,
    ignoreSSL,
    setIgnoreSSL,
    proxy,
    setProxy,
    proxyEnabled,
    setProxyEnabled,
  } = useContext(FeatureToggleContext)
  const [partialProxy, setPartialProxy] = useState<string>(proxy)
  const [gpuEnabled, setGpuEnabled] = useState<boolean>(false)
  const [gpuList, setGpuList] = useState<GPU[]>([])
  const [gpusInUse, setGpusInUse] = useState<string[]>([])
  const { readSettings, saveSettings, validateSettings, setShowNotification } =
    useSettings()
  const { stopModel } = useActiveModel()

  const selectedGpu = gpuList
    .filter((x) => gpusInUse.includes(x.id))
    .map((y) => {
      return y['name']
    })

  const onProxyChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value || ''
      setPartialProxy(value)
      if (value.trim().startsWith('http')) {
        setProxy(value.trim())
      } else {
        setProxy('')
      }
    },
    [setPartialProxy, setProxy]
  )

  useEffect(() => {
    const setUseGpuIfPossible = async () => {
      const settings = await readSettings()
      setGpuEnabled(settings.run_mode === 'gpu' && settings.gpus?.length > 0)
      setGpusInUse(settings.gpus_in_use || [])
      if (settings.gpus) {
        setGpuList(settings.gpus)
      }
    }
    setUseGpuIfPossible()
  }, [readSettings])

  const clearLogs = async () => {
    if (await fs.existsSync(`file://logs`)) {
      await fs.rmdirSync(`file://logs`, { recursive: true })
    }
    toaster({
      title: 'Logs cleared',
      description: 'All logs have been cleared.',
      type: 'success',
    })
  }

  const handleGPUChange = (gpuId: string) => {
    // TODO detect current use GPU nvidia or AMD
    let updatedGpusInUse = [...gpusInUse]
    if (updatedGpusInUse.includes(gpuId)) {
      updatedGpusInUse = updatedGpusInUse.filter((id) => id !== gpuId)
      if (gpuEnabled && updatedGpusInUse.length === 0) {
        updatedGpusInUse.push(gpuId)
      }
    } else {
      updatedGpusInUse.push(gpuId)
    }
    setGpusInUse(updatedGpusInUse)
    saveSettings({ gpusInUse: updatedGpusInUse })
  }

  const gpuSelectionPlaceHolder =
    gpuList.length > 0 ? 'Select GPU' : "You don't have any compatible GPU"

  return (
    <div className="block w-full">
      {/* Keyboard shortcut  */}
      <div className="flex w-full items-start justify-between border-b border-border py-4 first:pt-0 last:border-none">
        <div className="flex-shrink-0 space-y-1.5">
          <div className="flex gap-x-2">
            <h6 className="text-sm font-semibold capitalize">
              Keyboard Shortcuts
            </h6>
          </div>
          <p className="leading-relaxed">
            Shortcuts that you might find useful in Jan app.
          </p>
        </div>
        <ShortcutModal />
      </div>

      {/* Experimental */}
      <div className="flex w-full items-start justify-between border-b border-border py-4 first:pt-0 last:border-none">
        <div className="flex-shrink-0 space-y-1.5">
          <div className="flex gap-x-2">
            <h6 className="text-sm font-semibold capitalize">
              Experimental Mode
            </h6>
          </div>
          <p className="leading-relaxed">
            Enable experimental features that may be unstable tested.
          </p>
        </div>
        <Switch
          checked={experimentalFeature}
          onCheckedChange={setExperimentalFeature}
        />
      </div>

      {/* CPU / GPU switching */}
      {!isMac && (
        <div className="flex w-full flex-col items-start justify-between border-b border-border py-4 first:pt-0 last:border-none">
          <div className="flex items-start justify-between w-full">
            <div className="space-y-1.5">
              <div className="flex gap-x-2">
                <h6 className="text-sm font-semibold capitalize">
                  GPU Acceleration
                </h6>
              </div>
              <p className="pr-8 leading-relaxed">
                Enable to enhance model performance by utilizing your devices
                GPU for acceleration. Read{' '}
                <span>
                  {' '}
                  <span
                    className="cursor-pointer text-blue-600"
                    onClick={() =>
                      openExternalUrl(
                        'https://jan.ai/guides/troubleshooting/gpu-not-used/'
                      )
                    }
                  >
                    troubleshooting guide
                  </span>{' '}
                </span>{' '}
                for further assistance.
              </p>
            </div>
            {gpuList.length > 0 && !gpuEnabled && (
              <Tooltip>
                <TooltipTrigger>
                  <AlertCircleIcon size={20} className="mr-2 text-yellow-600" />
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  sideOffset={10}
                  className="max-w-[240px]"
                >
                  <span>
                    Disabling GPU Acceleration may result in reduced
                    performance. It is recommended to keep this enabled for
                    optimal user experience.
                  </span>
                  <TooltipArrow />
                </TooltipContent>
              </Tooltip>
            )}

            <Tooltip>
              <TooltipTrigger>
                <Switch
                  disabled={gpuList.length === 0}
                  checked={gpuEnabled}
                  onCheckedChange={(e) => {
                    if (e === true) {
                      saveSettings({ runMode: 'gpu' })
                      setGpuEnabled(true)
                      setShowNotification(false)
                      snackbar({
                        description: 'Successfully turned on GPU Accelertion',
                        type: 'success',
                      })
                      setTimeout(() => {
                        validateSettings()
                      }, 300)
                    } else {
                      saveSettings({ runMode: 'cpu' })
                      setGpuEnabled(false)
                      snackbar({
                        description: 'Successfully turned off GPU Accelertion',
                        type: 'success',
                      })
                    }
                    // Stop any running model to apply the changes
                    if (e !== gpuEnabled) stopModel()
                  }}
                />
              </TooltipTrigger>
              {gpuList.length === 0 && (
                <TooltipContent
                  side="right"
                  sideOffset={10}
                  className="max-w-[240px]"
                >
                  <span>
                    Your current device does not have a compatible GPU for
                    monitoring. To enable GPU monitoring, please ensure your
                    device has a supported Nvidia or AMD GPU with updated
                    drivers.
                  </span>
                  <TooltipArrow />
                </TooltipContent>
              )}
            </Tooltip>
          </div>
          <div className="mt-2 w-full rounded-lg bg-secondary p-4">
            <label className="mb-1 inline-block font-medium">Choose GPU</label>
            <Select
              disabled={gpuList.length === 0 || !gpuEnabled}
              value={selectedGpu.join()}
            >
              <SelectTrigger className="w-[340px] dark:bg-gray-500 bg-white">
                <SelectValue placeholder={gpuSelectionPlaceHolder}>
                  <span className="line-clamp-1 w-full pr-8">
                    {selectedGpu.join()}
                  </span>
                </SelectValue>
              </SelectTrigger>
              <SelectPortal>
                <SelectContent className="w-[400px] px-1 pb-2">
                  <SelectGroup>
                    <SelectLabel>Nvidia</SelectLabel>
                    <div className="px-4 pb-2">
                      <div className="rounded-lg bg-secondary p-3">
                        {gpuList
                          .filter((gpu) =>
                            gpu.name?.toLowerCase().includes('nvidia')
                          )
                          .map((gpu) => (
                            <div
                              key={gpu.id}
                              className="my-1 flex items-center space-x-2"
                            >
                              <Checkbox
                                id={`gpu-${gpu.id}`}
                                name="gpu-nvidia"
                                className="bg-white"
                                value={gpu.id}
                                checked={gpusInUse.includes(gpu.id)}
                                onCheckedChange={() => handleGPUChange(gpu.id)}
                              />
                              <label
                                className="flex w-full items-center justify-between"
                                htmlFor={`gpu-${gpu.id}`}
                              >
                                <span>{gpu.name}</span>
                                <span>{gpu.vram}MB VRAM</span>
                              </label>
                            </div>
                          ))}
                      </div>
                      {/* Warning message */}
                      {gpuEnabled && gpusInUse.length > 1 && (
                        <div className="mt-2 flex items-start space-x-2 text-yellow-500">
                          <AlertTriangleIcon
                            size={16}
                            className="flex-shrink-0"
                          />
                          <p className="text-xs leading-relaxed">
                            If multi-GPU is enabled with different GPU models or
                            without NVLink, it could impact token speed.
                          </p>
                        </div>
                      )}
                    </div>
                  </SelectGroup>

                  {/* TODO enable this when we support AMD */}
                </SelectContent>
              </SelectPortal>
            </Select>
          </div>
        </div>
      )}

      <DataFolder />
      {/* Proxy */}
      <div className="flex w-full items-start justify-between border-b border-border py-4 first:pt-0 last:border-none">
        <div className="flex-shrink-0 space-y-1.5 w-full">
          <div className="flex gap-x-2 justify-between w-full">
            <h6 className="text-sm font-semibold capitalize">HTTPS Proxy</h6>
            <Switch
              checked={proxyEnabled}
              onCheckedChange={(_) => setProxyEnabled(!proxyEnabled)}
            />
          </div>
          <p className="leading-relaxed">
            Specify the HTTPS proxy or leave blank (proxy auto-configuration and
            SOCKS not supported).
          </p>
          <Input
            placeholder={'http://<user>:<password>@<domain or IP>:<port>'}
            value={partialProxy}
            onChange={onProxyChange}
            className="w-2/3"
          />
        </div>
      </div>

      {/* Ignore SSL certificates */}
      <div className="flex w-full items-start justify-between border-b border-border py-4 first:pt-0 last:border-none">
        <div className="flex-shrink-0 space-y-1.5">
          <div className="flex gap-x-2">
            <h6 className="text-sm font-semibold capitalize">
              Ignore SSL certificates
            </h6>
          </div>
          <p className="leading-relaxed">
            Allow self-signed or unverified certificates - may be required for
            certain proxies.
          </p>
        </div>
        <Switch checked={ignoreSSL} onCheckedChange={(e) => setIgnoreSSL(e)} />
      </div>

      {/* Clear log */}
      <div className="flex w-full items-start justify-between border-b border-border py-4 first:pt-0 last:border-none">
        <div className="flex-shrink-0 space-y-1.5">
          <div className="flex gap-x-2">
            <h6 className="text-sm font-semibold capitalize">Clear logs</h6>
          </div>
          <p className="leading-relaxed">Clear all logs from Jan app.</p>
        </div>
        <Button size="sm" themes="secondaryDanger" onClick={clearLogs}>
          Clear
        </Button>
      </div>

      {/* Factory Reset */}
      <FactoryReset />
    </div>
  )
}

export default Advanced
