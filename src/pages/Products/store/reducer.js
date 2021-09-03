import { combineReducers } from "redux";
import { ActionTypes } from "./constants";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const intialState = {
    products: [],
}

const productReducer = (state = intialState, action) => {
    console.log(action);
    switch (action.type) {
      case ActionTypes.SET_CLASSES:
        return {
          ...state,
          classes: action.payload,
        };
    default:
        return state
    }
}

export default productReducer;