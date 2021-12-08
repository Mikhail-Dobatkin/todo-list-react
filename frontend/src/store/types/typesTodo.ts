import { ITodo } from '../../models/interface/interface'

export interface TodoState {
    todos: ITodo[]
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
}

interface FetchTodosAction {
    type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodosSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS
    payload: ITodo[]
}
export type TodoAction = FetchTodosAction | FetchTodosSuccessAction
