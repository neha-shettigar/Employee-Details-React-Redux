import { ActionType } from "../action-types/index"

// interface for the employee details
export interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}

//interface for each action
interface AddEmployeeAction {
  type: ActionType.ADD;
  payload: Employee; // paylaod consists for employee details
}

interface RemoveEmployeeAction {
    type: ActionType.REMOVE,
    payload: number // here payload is id
}

interface UpdateEmployeeAction {
  type: ActionType.UPDATE;
  payload: Employee; // employee details
}

export type Action = AddEmployeeAction | RemoveEmployeeAction | UpdateEmployeeAction;