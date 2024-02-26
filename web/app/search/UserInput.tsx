import React, { useState, useRef, useEffect } from 'react'

import { Button } from '@janhq/uikit'

import { useAtomValue } from 'jotai'
import { Send } from 'lucide-react'

import LogoMark from '@/containers/Brand/Logo/Mark'
import { selectedTextAtom } from '@/containers/Providers/Jotai'

const UserInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const selectedText = useAtomValue(selectedTextAtom)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        window.core?.api?.minimizeQuickAsk()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      // console.log(`NamH - handleClickOutside - event: `, event)
      // TODO: FIX this, not working for now
      // if (formRef.current && !formRef.current.contains(event.target)) {
      // window.core?.api?.minimizeQuickAsk()
      // }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = event.target
    setInputValue(value)
  }

  // const handlePaste = (event: React.ClipboardEvent) => {
  //   const paste = event.clipboardData.getData('text')
  //   setInputValue(paste)
  //   if (paste.includes('\n')) {
  //     setIsInputExpanded(true)
  //     window.api.send('extend-input-window')
  //   }
  // }

  // const handleTextAreaKeyDown = (event: any) => {
  //   if (event.key === 'Enter' && !event.shiftKey) {
  //     event.preventDefault()
  //     handleSubmit(event)
  //   } else if (event.key === 'Enter' && event.shiftKey) {
  //     setInputValue(inputValue + '\n')
  //   }
  // }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() !== '') {
      window.core?.api?.sendQuickAskInput(inputValue)
      setInputValue('')
      window.core?.api?.minimizeQuickAsk()
      window.core?.api?.showMainWindow()
    }
  }

  const displaySelectedText = selectedText.length > 0

  return (
    <>
      <form
        ref={formRef}
        className="flex h-full w-full items-center justify-center px-4"
        onSubmit={onSubmit}
      >
        <div className="flex h-full w-full items-center gap-4">
          <LogoMark width={28} height={28} className="mx-auto" />
          <input
            ref={inputRef}
            className="flex-1 font-bold focus:outline-none"
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Ask me anything"
          />
          <Button type="submit">
            <Send size={16} />
          </Button>
        </div>
      </form>
      {displaySelectedText && <div>{displaySelectedText}</div>}
    </>
  )
}

export default UserInput
