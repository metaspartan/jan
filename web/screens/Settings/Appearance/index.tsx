import { useCallback } from 'react'

import { useTheme } from 'next-themes'

import { Button, Select, Switch } from '@janhq/joi'
import { useAtom, useAtomValue } from 'jotai'

import {
  reduceTransparentAtom,
  selectedThemeIdAtom,
  spellCheckAtom,
  themeDataAtom,
  themesOptionsAtom,
} from '@/helpers/atoms/Setting.atom'

export default function AppearanceOptions() {
  const [selectedIdTheme, setSelectedIdTheme] = useAtom(selectedThemeIdAtom)
  const themeOptions = useAtomValue(themesOptionsAtom)
  const { setTheme } = useTheme()
  const [themeData, setThemeData] = useAtom(themeDataAtom)
  const [reduceTransparent, setReduceTransparent] = useAtom(
    reduceTransparentAtom
  )
  const [spellCheck, setSpellCheck] = useAtom(spellCheckAtom)

  const handleClickTheme = useCallback(
    async (e: string) => {
      setSelectedIdTheme(e)
      const theme: Theme = await window.electronAPI.readTheme(e)
      setThemeData(theme)
      setTheme(String(theme?.nativeTheme))
      if (theme?.reduceTransparent) {
        setReduceTransparent(reduceTransparent)
      } else {
        setReduceTransparent(true)
      }
    },
    [
      reduceTransparent,
      setReduceTransparent,
      setSelectedIdTheme,
      setTheme,
      setThemeData,
    ]
  )

  return (
    <div className="m-4 block">
      <div className="flex w-full flex-col items-start justify-between gap-4 border-b border-[hsla(var(--app-border))] py-4 first:pt-0 last:border-none sm:flex-row">
        <div className="flex-shrink-0 space-y-1">
          <div className="flex gap-x-2">
            <h6 className="font-semibold capitalize">Appearance</h6>
          </div>
          <p className="font-medium leading-relaxed text-[hsla(var(--text-secondary))]">
            Select a color theme
          </p>
        </div>
        <Select
          value={selectedIdTheme || 'joi-light'}
          options={themeOptions}
          onValueChange={(e) => handleClickTheme(e)}
        />
      </div>
      {themeData?.reduceTransparent && (
        <div className="flex w-full flex-col items-start justify-between gap-4 border-b border-[hsla(var(--app-border))] py-4 first:pt-0 last:border-none sm:flex-row">
          <div className="flex-shrink-0 space-y-1">
            <div className="flex gap-x-2">
              <h6 className="font-semibold capitalize">Interface theme</h6>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <Button
              theme={reduceTransparent ? 'primary' : 'ghost'}
              variant={reduceTransparent ? 'solid' : 'outline'}
              onClick={() => setReduceTransparent(true)}
            >
              Solid
            </Button>
            <Button
              theme={reduceTransparent ? 'ghost' : 'primary'}
              variant={reduceTransparent ? 'outline' : 'solid'}
              onClick={() => setReduceTransparent(false)}
            >
              Translucent
            </Button>
          </div>
        </div>
      )}
      <div className="flex w-full flex-col items-start justify-between gap-4 border-b border-[hsla(var(--app-border))] py-4 first:pt-0 last:border-none sm:flex-row">
        <div className="w-full space-y-1 lg:w-3/4">
          <div className="flex gap-x-2">
            <h6 className="font-semibold capitalize">Spell Check</h6>
          </div>
          <p className=" font-medium leading-relaxed text-[hsla(var(--text-secondary))]">
            Toggle to disable spell checking.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Switch
            checked={spellCheck}
            onChange={(e) => setSpellCheck(e.target.checked)}
          />
        </div>
      </div>
    </div>
  )
}
