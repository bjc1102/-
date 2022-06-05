import React, { Children } from 'react'
import styled from 'styled-components'
import { flexCenter } from '../styles/theme'

type Props = {
  children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutContainer>
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutContainer>
  )
}

export default Layout

const LayoutContainer = styled.div`
  max-width: 75rem;
  height: 100vh;
  @media screen and (max-width: 767px) {
    display: block;
    height: 100%;
  }
  margin: 0 auto;
  ${flexCenter}
`
const ContentWrapper = styled.div`
  width: 100%;
  height: 800px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 20px;
  @media screen and (max-width: 767px) {
    border-radius: 0;
  }
  overflow: hidden;
  padding: 40px;
`
