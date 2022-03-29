import React from 'react'

import { Container, Spacer, useTheme } from 'react-neu'
import styled from 'styled-components'
import BSFLogoBlack from '../../assets/img/blacksailslogoBlack.png'
import BSFLogowhite from '../../assets/img/blacksailslogoWhite.png'

interface PageHeaderProps {
  icon: React.ReactNode,
  subtitle?: string,
  title?: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
    const { darkMode } = useTheme()
  return (
    <Container size="sm">
    <StyledPageHeader>
      <StyledIcon>{darkMode ? <img src={BSFLogowhite} height="130" style={{ marginTop: -30 }} /> : <img src={BSFLogoBlack} height="130" style={{ marginTop: -30 }} />}
	  </StyledIcon>
	  
      <Spacer size="sm" />
	  <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${props => props.theme.spacing[6]}px;
  margin: 0 auto;
`

const StyledIcon = styled.span.attrs({
  role: 'img'
})`
  font-size: 96px;
  height: 96px;
  line-height: 96px;
  text-align: center;
  min-width: 96px;
`

const StyledTitle = styled.h1`
  font-family: 'Kaushan Script', sans-serif;
  //color: ${props => props.theme.textColor};
  color: #d11515;
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-align: center;
`

const StyledSubtitle = styled.h3`
  // color: ${props => props.theme.textColor};
  
  color: #d11515;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  opacity: 0.66;
  padding: 0;
  text-align: center;
`

export default PageHeader