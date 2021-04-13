import { 
  CHOOSE_WORKS_TYPE,
  Works,
  WorksTypes
 } from "./types";

 export const addOrRemoveTypeOfWork = (typeOfWork: Works ):WorksTypes  => {
  return {
    type : CHOOSE_WORKS_TYPE,
    payload: typeOfWork,
  }
 }