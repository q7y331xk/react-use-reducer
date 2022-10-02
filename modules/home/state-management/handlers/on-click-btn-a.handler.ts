import { OnClickBtnA } from '../../types/home-action.type';
import { HomeState } from '../../types/home-state.interface';

export const onClickBtnAHandler = (state: HomeState, action: OnClickBtnA): HomeState => {
  const { a, b } = state;
  const { data: { plus } } = action;
  const stateNew = {
    a: a + 1,
    b: b + plus,
  }
  return stateNew;
}