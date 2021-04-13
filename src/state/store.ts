import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
// State Types
import { Works } from "./actions/works/types";

export interface InitialState {
  works : Works;
}

const middleware = [thunk];

const store = (preloadedState : InitialState) => {
  return createStore(
    rootReducer,
    getLoadedState(preloadedState),
    composeWithDevTools(applyMiddleware(...middleware))
  )
}

const getLoadedState = (preloadedState : InitialState | any) => {
  if(typeof window !== 'undefined') 
  return {
    ...preloadedState
  }

  return {
    ...preloadedState
  }
}

export default store;