import { UPDATE } from "./actionTypes";
import { ADD } from "./actionTypes";
import { SUBTRACT } from "./actionTypes";
import { MULTIPLY } from "./actionTypes";
import { DIVIDE } from "./actionTypes";
import { CLEAR } from "./actionTypes";
import { EQUAL } from "./actionTypes";

export const updateDisplay = content => ({
  type: UPDATE, 
  payload: {
    input: content,
    operation: "num"
  }
})

export const addition = content => ({
  type: ADD,
  payload: {
    input: content,
    operation: "operator"
  }
});

export const subtraction = content => ({
  type: SUBTRACT,
  payload: {
    input: content,
    operation: "operator"
  }
})

export const multiplication = content => ({
  type: MULTIPLY,
  payload: {
    input: content,
    operation: "operator"
  }
});

export const division = content => ({
  type: DIVIDE,
  payload: {
    input: content,
    operation: "operator"
  }
});

export const clearDisplay = content => ({
  type: CLEAR,
})

export const equal = content => ({
  type: EQUAL,
  payload: {
    input: content,
  }
})