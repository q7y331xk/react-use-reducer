import { onEnterHandler } from './handlers/on-enter.handler';
import { onClickBtnAHandler } from './handlers/on-click-btn-a.handler';
import { HomeAction } from '../types/home-action.type';
import { HomeState } from "../types/home-state.interface";
import { onClickBtnBHandler } from './handlers/on-click-btn-b.handler';

export const homeReducer = (state: HomeState, action: HomeAction): HomeState => {
  switch(action.type) {
    case 'ON_CLICK_BTN_A':
      return onClickBtnAHandler(state, action);
    case 'ON_CLICK_BTN_B':
      return onClickBtnBHandler(state);
    case 'ON_ENTER':
      return onEnterHandler(state);
    default:
      return state;
  }
}