import { DECREMENT, IIncrementAction, INCREMENT } from "../actions/counter/actionTypes";

export interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0
};

const counterReducer = (state: ICounterState = initialState, action: IIncrementAction): ICounterState => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + payload
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - payload
      };
    default:
      return state;
  }
};

export default counterReducer;
