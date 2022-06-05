import { atom } from 'recoil'
import { IContent } from '../@types/checkList'

export const checkListState = atom<IContent[]>({
  key: 'checkListState',
  default: [],
})
