import {
  DO_LOGIN,
  SET_BALANCE_STUDENT,
  SET_BALANCE_VICTIM1,
  SET_BALANCE_VICTIM2,
  ADD_MESSAGE,
} from "./actiontypes";

export function doLogin(name) {
  return {
    type: "DO_LOGIN",
    name: name,
  };
}

export function setBalanceStudent(sbalance) {
  return {
    type: "SET_BALANCE_STUDENT",
    sbalance: sbalance,
  };
}

export function setBalanceVictim1(v1balance) {
  return {
    type: "SET_BALANCE_VICTIM1",
    v1balance: v1balance,
  };
}

export function setBalanceVictim2(v2balance) {
  return {
    type: "SET_BALANCE_VICTIM2",
    v2balance: v2balance,
  };
}

export function addMessage(message) {
  return {
    type: "ADD_MESSAGE",
    message: message,
  };
}
