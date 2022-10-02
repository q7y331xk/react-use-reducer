export type OnClickBtnA = {
  type: 'ON_CLICK_BTN_A';
  data: {
    plus: number;
  };
}

export type OnClickBtnB = {
  type: 'ON_CLICK_BTN_B'
}

export type OnEnter = {
  type: 'ON_ENTER'
}

export type HomeAction = OnClickBtnA | OnClickBtnB | OnEnter;
