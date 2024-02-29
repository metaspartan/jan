import { Fragment, ReactNode, useEffect } from 'react'

import useChatMessage from '@/hooks/useChatMessage'

type Props = {
  children: ReactNode
}

const QuickAskListener: React.FC<Props> = ({ children }) => {
  const { sendQuickAskMessage } = useChatMessage()

  useEffect(() => {
    if (window && window.electronAPI) {
      // TODO: make input to a type to contain more than just string
      // TODO: Move me to another layer. Since I'm not related to app update
      window.electronAPI.onUserSubmitQuickAsk(
        (_event: string, input: string) => {
          console.log('<--NamH received message', input)
          sendQuickAskMessage(input)
        }
      )
    }
  }, [])

  return <Fragment>{children}</Fragment>
}

export default QuickAskListener
