import { ADD } from "./actionTypes";
import { UPDATE } from "./actionTypes";
import { CLEAR } from "./actionTypes";
import { EQUAL } from "./actionTypes";

export const addition = content => ({
  type: ADD,
  payload: {
    input: content,
    operation: "add"
  }
});

export const updateDisplay = content => ({
  type: UPDATE, 
  payload: {
    display: content
  }
})

export const clearDisplay = content => ({
  type: CLEAR,
})

export const equal = content => ({
  type: EQUAL,
  payload: {
    input: content,
  }
})