import { HomeState } from './../../types/home-state.interface';

export const onEnterHandler = (state: HomeState): HomeState => {
  console.log('hi');
  return state;  
}