import { ADD } from "../actions/actionTypes";
import { SUBTRACT } from "../actions/actionTypes";
import { MULTIPLY } from "../actions/actionTypes";
import { DIVIDE } from "../actions/actionTypes";
import { UPDATE } from "../actions/actionTypes";
import { CLEAR } from "../actions/actionTypes";
import { EQUAL } from "../actions/actionTypes";

const initialState = {
  display: '0',
  prevOp: "",
  accumulated: 0
}



export default function (state = initialState, action) {
  switch (action.type) {


    case UPDATE: {
      console.log(state.display);
      const updateDisplay = action.payload;
      if (state.display.includes('.') && updateDisplay.display === ".") {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          display: state.display == '0' || state.prevOp === "operator" ? updateDisplay.display : state.display + updateDisplay.display,
          prevOp: updateDisplay.operation
        }
      }
    }


    case ADD: {
      const payload = action.payload;
      console.log(payload);
      let n1 = state.accumulated;
      let n2 = parseInt(payload.input);
      let sum = n1 + n2;

      return {
        ...state,
        display: sum.toString(),
        accumulated: sum,
        prevOp: payload.operation
      }
    }

    case SUBTRACT: {
      const payload = action.payload;
      console.log(payload);
      let accumulator = state.accumulated;
      let difference = accumulator - parseInt(payload.input);
      return {
        ...state,
        display: difference.toString(),
        accumulated: difference,
        prevOp: payload.operation
      }
    }

    case MULTIPLY: {
      const payload = action.payload;
      let accumulator = state.accumulated;
      let product = accumulator * parseInt(state.display);
      return {
        ...state,
        display: product.toString(),
        accumulated: product,
        prevOp: payload.operation
      }
    }

    case DIVIDE: {
      const payload = action.payload;
      let accumulator = state.accumulated;
      let quotient = accumulator / parseInt(state.display);
      return {
        ...state,
        display: quotient.toString(),
        accumulated: quotient,
        prevOp: payload.operation
      }
    }

    case CLEAR: {
      return {
        ...state,
        display: '0',
        operation: "",
        accumulated: 0
      }
    }

    case EQUAL: {


      return {
        ...state,
        //display: sum,
      }
    }
    default:
      return state;
  }

}