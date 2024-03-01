import { useEffect, useState } from 'react'

import { getJanDataFolderPath } from '@janhq/core'

export const RelativeImage = ({
  id,
  src,
  onClick,
}: {
  id: string
  src: string
  onClick: () => void
}) => {
  const [path, setPath] = useState<string>('')

  useEffect(() => {
    getJanDataFolderPath().then((dataFolderPath) => {
      setPath(dataFolderPath)
    })
  }, [])
  return (
    <img
      className="aspect-auto h-[300px]"
      alt={id}
      src={src.includes('files/') ? `${path}/${src}` : src}
      onClick={onClick}
    />
  )
}
