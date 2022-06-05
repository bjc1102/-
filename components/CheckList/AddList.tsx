import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Plus from '../../public/assets/Plus'
import { Container, Header3 } from '../../styles/theme'
import randomString from 'randomstring'
import { IContent } from '../../@types/checkList'
import { useRecoilState } from 'recoil'
import { checkListState } from '../../Atoms/checkListState'

const AddList = () => {
  const [content, setContent] = useState('')
  const [checkList, setCheckList] = useRecoilState(checkListState)

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!content.trim()) {
        alert('리스트를 입력해주세요')
        return
      }
      const newCheckList: IContent = {
        id: randomString.generate(),
        content: content.trim(),
        completed: false,
      }
      setCheckList([...checkList, newCheckList])
      setContent('')
    },
    [checkList, content]
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setContent(e.target.value)
    },
    [content]
  )

  return (
    <AddListContainer>
      <Plus />
      <form onSubmit={handleSubmit}>
        <input
          name="content"
          type="text"
          value={content}
          onChange={handleChange}
        />
      </form>
    </AddListContainer>
  )
}

export default AddList

export const AddListContainer = styled.div`
  ${Container}
  border-radius: 10px;
  background-color: ${(props) => props.theme.accentColor};
  svg {
    position: absolute;
  }
  form {
    width: 100%;
    input {
      width: 100%;
      box-sizing: border-box;
      padding: 2px 30px;
      background-color: ${(props) => props.theme.accentColor};
      border: none;
      outline: none;
      border: 2px solid ${(props) => props.theme.bgColor};
      border-radius: 6px;
      ${Header3}
      font-weight: 500;
    }
  }
`
