import { Fragment, PropsWithChildren, useEffect } from 'react'

import { AppUpdateInfo } from '@janhq/core'
import { useSetAtom } from 'jotai'

import { appDownloadProgress } from './Jotai'

const AppUpdateListener = ({ children }: PropsWithChildren) => {
  const setProgress = useSetAtom(appDownloadProgress)

  useEffect(() => {
    if (window && window.electronAPI) {
      window.electronAPI.onAppUpdateDownloadUpdate(
        (_event: string, appUpdateInfo: AppUpdateInfo) => {
          setProgress(appUpdateInfo.percent)
          console.debug('app update progress:', appUpdateInfo.percent)
        }
      )

      window.electronAPI.onAppUpdateDownloadError(
        (_event: string, error: Error) => {
          console.error('Download error', error)
          setProgress(-1)
        }
      )

      window.electronAPI.onAppUpdateDownloadSuccess(() => {
        setProgress(-1)
      })
    }
  }, [setProgress])

  return <Fragment>{children}</Fragment>
}

export default AppUpdateListener
