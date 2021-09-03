import { combineReducers } from "redux";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "./pages/Products/store/reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["activityReducer"],
  };
  
  
const rootReducer = combineReducers({
    productReducer,
});

    
 const products = persistReducer(persistConfig, rootReducer);

export const store = createStore(products,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store);
  
  