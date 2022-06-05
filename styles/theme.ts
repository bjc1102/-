import { css, DefaultTheme } from 'styled-components'

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = css`
  display: flex;
  width: 100%;
  padding: 1rem 2rem;
  box-sizing: border-box;
  max-width: 70rem;
  @media screen and (max-width: 767px) {
    padding: 1rem 1.5rem;
  }
`

export const Header3 = css`
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
`

export const Body2 = css`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.375rem;
`
export const MediaQuery = () => {
  return `@media (max-width: 767px)`
}

export const Theme: DefaultTheme = {
  bgColor: '#3b3b3b',
  textColor: '#fff',
  accentColor: '#e67e22',
  whiteColor: '#fff',
  grayColor: '#939393',
}
