'use client'

import { Fragment, ReactNode } from 'react'

import useAssistants from '@/hooks/useAssistants'
import useGetSystemResources from '@/hooks/useGetSystemResources'
import useModels from '@/hooks/useModels'
import useThreads from '@/hooks/useThreads'

type Props = {
  children: ReactNode
}

const DataLoader: React.FC<Props> = ({ children }) => {
  useModels()
  useThreads()
  useAssistants()
  useGetSystemResources()
  console.debug('Load Data...')

  return <Fragment>{children}</Fragment>
}

export default DataLoader
