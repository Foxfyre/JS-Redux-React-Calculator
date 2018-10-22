import { ADD } from "../actions/actionTypes";
import { SUBTRACT } from "../actions/actionTypes";
import { MULTIPLY } from "../actions/actionTypes";
import { DIVIDE } from "../actions/actionTypes";
import { UPDATE } from "../actions/actionTypes";
import { CLEAR } from "../actions/actionTypes";
import { EQUAL } from "../actions/actionTypes";
import * as math from 'mathjs'

const initialState = {
  display: '0',
  prevOp: "",
  accumulated: "0",
  history: '0'
}



export default function (state = initialState, action) {
  switch (action.type) {


    case UPDATE: {
      const updateDisplay = action.payload;
      console.log(action.payload);
      if (state.display.includes('.') && updateDisplay.input === ".") {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          display: state.display == '0' || state.prevOp === "operator" ? updateDisplay.input
            : state.display + updateDisplay.input,
          prevOp: updateDisplay.operation,
        }
      }
    }


    case ADD: {

      return {
        ...state,
        display: state.display,
        history: state.history == '0' && state.accumulated == "0" ? state.display + " + "
          : state.accumulated != "0" ? state.accumulated + " + "
            : state.history + state.display + " + ",
        prevOp: "operator"
      }
    }

    case SUBTRACT: {

      return {
        ...state,
        display: state.display,
        history: state.history == '0' && state.accumulated == "0" ? state.display + " - "
          : state.accumulated != "0" ? state.accumulated + " - "
            : state.history + state.display + " - ",
        prevOp: "operator"
      }
    }

    case MULTIPLY: {

      return {
        ...state,
        display: state.display,
        history: state.history == '0' && state.accumulated == "0" ? state.display + " * "
          : state.accumulated != "0" ? state.accumulated + " * "
            : state.history + state.display + " * ",
        prevOp: "operator"
      }
    }

    case DIVIDE: {

      return {
        ...state,
        display: state.display,
        history: state.history == '0' && state.accumulated == "0" ? state.display + " / "
          : state.accumulated != "0" ? state.accumulated + " / "
            : state.history + state.display + " / ",
        prevOp: "operator"
      }
    }

    case CLEAR: {
      return {
        ...state,
        display: '0',
        prevOp: "clear",
        accumulated: 0,
        history: "0"
      }
    }

    case EQUAL: {
      let states = state.history + state.display;
      let maths = math.eval(states);
      console.log(maths);

      return {
        ...state,
        history: maths.toString(),
        //history: state.history + state.display,
        display: maths.toString(),
        accumulated: maths.toString(),
        prevOp: "equal",

      }
    }
    default:
      return state;
  }

}