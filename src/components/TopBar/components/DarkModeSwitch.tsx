import React, { useEffect } from 'react'
import SNBB from '../../../assets/img/skullnbonesb.png'
import SNBW from '../../../assets/img/skullnbonesw.png'

import {
  Emoji,
  Switch,
  SwitchButton,
  useTheme,
} from 'react-neu'

import useLocalStorage from 'hooks/useLocalStorage'

const DarkModeSwitch: React.FC = () => {
  const { darkMode, onToggleDarkMode } = useTheme()
  const [_, setDarkModeSetting] = useLocalStorage('darkMode', darkMode)

  useEffect(() => {
    setDarkModeSetting(darkMode)
  }, [
    darkMode,
    setDarkModeSetting
  ])

  return (
    <Switch>
      <SwitchButton
        active={!darkMode}
        onClick={onToggleDarkMode}
        round
      >
        <img src={SNBW} height="25" style={{ marginTop: 0 }} />
      </SwitchButton>
      <SwitchButton
        active={darkMode}
        onClick={onToggleDarkMode}
        round
      >
        <img src={SNBB} height="25" style={{ marginTop: 0 }} />
      </SwitchButton>
    </Switch>
  )
}

export default DarkModeSwitch