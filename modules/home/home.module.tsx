import type { NextPage } from 'next'
import { MouseEventHandler, useReducer } from 'react';
import { BoardRowsRounded } from '../../components/organisms/board/board-rows-rounded/board-rows-rounded';
import { homeReducer } from './state/home-reducer';
import { homeInitialState } from './state/home-initial-state';
import { useEnter } from '../../libs/react-hooks/use-enter/use-enter';

const HomeModule: NextPage = () => {
  // constant

  // use state
  const [state, dispatch] = useReducer(homeReducer, homeInitialState)
  const {a, b} = state;

  // events
  useEnter(() => { dispatch({ type: 'ON_ENTER' }) });
  const onClickBtnA: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch({type: 'ON_CLICK_BTN_A', data: { plus: 3 }})
  }
  const onClickBtnB: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch({type: 'ON_CLICK_BTN_B'})
  }
  // styles

  // template
  return <>
    <h1>Let's test rendering</h1>
    <BoardRowsRounded>
      <BoardRowsRounded.Row number={a} text={'a'} btnAttr={{
        onClick: onClickBtnA
      }}/>
      <BoardRowsRounded.Row number={b} text={'b'} btnAttr={{
        onClick: onClickBtnB
      }}/>
    </BoardRowsRounded>
  </>
}

export default HomeModule;
