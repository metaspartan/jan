/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, PropsWithChildren } from 'react'

import { log } from '@janhq/core'
import { useSetAtom } from 'jotai'

import { selectedTextAtom } from './Jotai'

const ClipboardListener = ({ children }: PropsWithChildren) => {
  const setSelectedText = useSetAtom(selectedTextAtom)

  console.log('NamH api', window?.electronAPI)
  window?.electronAPI?.onSelectedText((_event: any, text: any) => {
    log('NamH - ClipboardListener - onSelectedText - text: ', text)
    log('NamH - ClipboardListener - onSelectedText - event: ', _event)
    // setSelectedText(text)
  })

  return <Fragment>{children}</Fragment>
}

export default ClipboardListener
