// Miguel Gargallo 2022 (c) All Rights Reserved.
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'
import { localeAwareUpperCase } from '../../lib/words'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  solution: string
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  solution,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(solution, guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = localeAwareUpperCase(e.key)
        // TODO: check this test if the range works with non-english letters
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        {['2', '4', '🥖', '🍑', '☂️', '🤡', '🍆', '💦', '🏳️‍🌈', '🏳️‍⚧️'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key width={65.4} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
      <div className="flex justify-center mb-1">
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
        <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
      </div>
      <div className="flex justify-center mb-1">
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Ç', '<div class="tUoK3c uTqStd" jscontroller="SRqpxc" data-darkmode="" data-spotlight-effect="light" jsaction="rcuQ6b:npT2md"><div jscontroller="sgF1mc" jsdata="uADt9e;_;AdQ35U" jsaction="iZASk:nb0jFc;mH09Ue:nb0jFc;BAVhqc:nb0jFc;khYtae:nb0jFc;PzAzEc:nb0jFc"><img jsname="fpF2df" class="smm4bb" src="https://www.google.com/logos/fnbx/pride/icon_dm.gif" alt="" aria-hidden="true" role="button" tabindex="-1" jsaction="uG8GZb" data-atf="4" data-frt="0"><div jsname="pO2gXe" data-ved="2ahUKEwjUkom45dz4AhXaD1kFHbwMDQoQ5N8HKAJ6BAhUEAw"><div jscontroller="x4odoe" data-is-darkmode="" jsdata="picFee;_;AdQ35k" jsaction="rcuQ6b:npT2md;PYoRde:i4X6oc;TMu8m:tTT8Tc;pyo0eb:tTT8Tc;ZnQkLe:MYO7qe" data-ved="2ahUKEwjUkom45dz4AhXaD1kFHbwMDQoQ0uAHegQIVBAN"></div></div></div><div jsname="YZTuq" style="display:none" data-ved="2ahUKEwjUkom45dz4AhXaD1kFHbwMDQoQ8LcHKAN6BAhUEA4"></div></div>'].map((key) => (
          <Key
            value={key}
            key={key}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
    </div>
  )
}
