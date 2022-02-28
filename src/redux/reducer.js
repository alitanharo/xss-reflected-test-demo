import {
  DO_LOGIN,
  SET_BALANCE_STUDENT,
  SET_BALANCE_VICTIM1,
  SET_BALANCE_VICTIM2,
  ADD_MESSAGE,
} from "./actiontypes";

const initialState = {
  name: [" "],
  sender: [""],
  sbalance: [""],
  v1balance: [""],
  v2blance: [""],
  message: [""],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "DO_LOGIN":
      return { ...state, name: [...state.name, action.name] };
    case "SET_STUDENT":
      return { ...state, sbalance: [...state.sbalance, action.sbalance] };
    case "SET_BALANCE_VICTIM1":
      return { ...state, v1balanc: [...state.v1balance, action.v1balance] };
    case "SET_BALANCE_VICTIM2":
      return { ...state, v2blance: [...state.v2blance, action.v2blance] };
    case "ADD_MESSAGE":
      return { ...state, message: [...state.message, action.message] };

    default:
      return state;
  }
}

export default reducer;
