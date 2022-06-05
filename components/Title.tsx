import React from 'react'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import { checkListState } from '../Atoms/checkListState'
import { Container, Header3 } from '../styles/theme'
import { getToday, getDayOfTheWeek } from '../utils/getDate'

const Title = () => {
  const setCheckList = useSetRecoilState(checkListState)

  function getTodayTitle(): string {
    const Today = getToday()

    return `${Today.year}년 ${Today.month + 1}월 ${
      Today.date
    }일 ${getDayOfTheWeek(Today.day)}요일`
  }

  return (
    <TitleWrapper>
      <h3>{getTodayTitle()}</h3>
    </TitleWrapper>
  )
}

export default Title

const TitleWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  ${Container}
  h3 {
    ${Header3}
  }
`
