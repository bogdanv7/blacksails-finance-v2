import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {useTheme} from 'react-neu'
import BSFLogoBlack from '../../assets/img/blacksailslogoBlack.png'
import BSFLogowhite from '../../assets/img/blacksailslogoWhite.png'

const Logo: React.FC = () => {
      const { darkMode } = useTheme()
  return (
    <StyledLogo to="/">
      {darkMode ? <img src={BSFLogowhite} height="40" style={{ marginTop: 0 }} /> : <img src={BSFLogoBlack} height="40" style={{ marginTop: 0 }} />}
      <StyledText>
        <BSFText> BlackSails.Finance</BSFText>
      </StyledText>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

const StyledEmoji = styled.span.attrs({
  role: 'img',
})`
  font-size: 24px;
`

const StyledText = styled.span`
  color: ${props => props.theme.textColor};
  font-size: 18px;
  font-weight: 700;
  margin-left: ${props => props.theme.spacing[2]}px;
  @media (max-width: 400px) {
    display: none;
  }
`
const BSFText = styled.span`
  font-family: 'Kaushan Script', sans-serif;
`

export default Logo