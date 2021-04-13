import { combineReducers } from "redux";
// Reducers
import { worksReducer } from "./works/reducer";

export const rootReducer = combineReducers({
works: worksReducer
})

export type RootState = ReturnType<typeof rootReducer>