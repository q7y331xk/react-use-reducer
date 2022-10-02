import { HomeState } from "../../types/home-state.interface";

export const onClickBtnBHandler = (state: HomeState): HomeState => {
  const { b } = state;
  const stateNew = { ...state, b: b + 1 };
  return stateNew;
}