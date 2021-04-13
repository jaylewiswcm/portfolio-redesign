export const CHOOSE_WORKS_TYPE = "CHOOSE_WORKS_TYPE"

export interface Works {
  typeOfWork: Array<string>
}


interface addOrRemoveTypeOfWork {
  type: typeof CHOOSE_WORKS_TYPE,
  payload: Works
}

export type WorksTypes = addOrRemoveTypeOfWork;