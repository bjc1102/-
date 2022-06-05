import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import styled, { css } from 'styled-components'
import { checkListState } from '../Atoms/checkListState'
import AddList from '../components/CheckList/AddList'
import CheckList from '../components/CheckList/CheckList'
import Title from '../components/Title'

//BEM 방식 ( block , element , model )

const index = () => {
  const checkList = useRecoilValue(checkListState)

  return (
    <React.Fragment>
      <Title />
      <CheckListWrapper>
        {checkList.length !== 0 ? (
          checkList.map((v, index) => <CheckList key={v.id} {...v} />)
        ) : (
          <h1 className="checkList__none">작성한 List가 없습니다</h1>
        )}
      </CheckListWrapper>
      <AddList />
    </React.Fragment>
  )
}

export default index

const scrollBar = css`
  border-radius: 0.375rem;
  width: 5px;
`

const CheckListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  gap: 5px;
  margin: 10px 0px;
  padding: 0px 40px;
  overflow-y: scroll;
  .checkList__none {
    color: white;
  }
  @media screen and (max-width: 767px) {
    padding: 0px 10px;
  }
  &::-webkit-scrollbar {
    background-color: ${(props) => props.theme.bgColor};
    ${scrollBar}
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.accentColor};
    ${scrollBar}
  }
`
