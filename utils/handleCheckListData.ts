import _ from 'lodash'
import { IContent } from '../@types/checkList'
import { findIndex } from 'lodash'

export function getSliceCheckList(id: string, value: IContent[]) {
  //id기준으로 자름
  const index = findIndex(value, { id: id })
  const front = value.slice(0, index)
  const back = value.slice(index + 1)
  return [[...front], [...back]]
}
