import React from 'react'
import styled from 'styled-components'
import { Body2, Container } from '../../styles/theme'
import { IContent } from '../../@types/checkList'
import Check from '../../public/assets/Check'
import { useRecoilState } from 'recoil'
import { checkListState } from '../../Atoms/checkListState'
import { findIndex } from 'lodash'
import { getSliceCheckList } from '../../utils/handleCheckListData'
import TrashIcon from '../../public/assets/trash'

const CheckList = ({ id, content = '...', completed }: IContent) => {
  const [nowCheckList, setNowCheckList] = useRecoilState(checkListState)

  const handleCompletedList = (id: string) => {
    setNowCheckList((oldValue) => {
      const [front, back] = getSliceCheckList(id, oldValue)
      return [
        ...front,
        {
          id,
          content,
          completed: !completed,
        },
        ...back,
      ]
    })
  }

  const handleDeleteList = (id: string) => {
    setNowCheckList((oldValue) => {
      const [front, back] = getSliceCheckList(id, oldValue)
      return [...front, ...back]
    })
  }

  return (
    <CheckListContainer completed={completed}>
      <div
        className="checklist__content"
        onClick={() => handleCompletedList(id)}
      >
        <Check completed={completed} />
        <span>{content}</span>
      </div>
      <DeleteButtonWrapper onClick={() => handleDeleteList(id)}>
        <TrashIcon />
      </DeleteButtonWrapper>
    </CheckListContainer>
  )
}

export default React.memo(CheckList)

const CheckListContainer = styled.div<{ completed: boolean }>`
  ${Container}
  justify-content: space-between;
  align-items: center;
  ${Body2}
  gap: 10px;
  border: 1px solid ${(props) => props.theme.accentColor};
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  text-decoration: ${(props) => props.completed && 'line-through'};
  .checklist__content {
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;

    span {
      width: 100%;
      flex: 1 1 auto;
      color: ${(props) =>
        props.completed ? props.theme.grayColor : props.theme.whiteColor};
    }
  }

  &:hover {
    cursor: pointer;
  }
`

const DeleteButtonWrapper = styled.button`
  background-color: inherit;
  border: none;
  width: 20px;
  height: 20px;
  path {
    fill: ${(props) => props.theme.whiteColor};
  }
  &:hover {
    cursor: pointer;
    path {
      fill: ${(props) => props.theme.accentColor};
    }
  }
`
