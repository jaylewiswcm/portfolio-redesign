import { 
  CHOOSE_WORKS_TYPE,
  Works,
  WorksTypes
 } from "../../actions/works/types";

 const initialState: Works ={
  typeOfWork: ["career","freelance", "personal"]
 }

 export const worksReducer = (state: Works = initialState, action : WorksTypes) => {
   const { type, payload } = action;

   switch(type) {
     case CHOOSE_WORKS_TYPE :
       return {
        ...state,
        typeOfWork: payload
       }
    default : 
    return state;
   }
 }