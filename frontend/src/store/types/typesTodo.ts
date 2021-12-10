import { ITodo } from '../../models/interface/interface'

export interface TodoState {
    todos: ITodo[]
}

// GET_TODOS_REQ
// GET_TODOS_RES
// GET_TODOS_ERR

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    CREATE_TODO = 'CREATE_TODO',
    CREATE_TODO_SUCCESS= 'CREATE_TODO_SUCCESS',
    DELETE_TODO = 'DELETE_TODO',
    DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
    CHANGE_TODO = 'CHANGE_TODO',
    CHANGE_TODO_STATE = 'CHANGE_TODO_STATE',
    CHANGE_TODO_STATE_SUCCESS = 'CHANGE_TODO_STATE_SUCCESS'
}

interface FetchTodosAction {
    type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodosSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS
    payload: ITodo[]
}

interface CreateTodoAction {
    type: TodoActionTypes.CREATE_TODO
}

interface CreateTodoSuccessAction {
    type: TodoActionTypes.CREATE_TODO_SUCCESS
    payload: ITodo
}

interface DeleteTodoAction {
    type: TodoActionTypes.DELETE_TODO
}

interface DeleteTodoActionSuccess {
    type: TodoActionTypes.DELETE_TODO_SUCCESS
    payload: string
}

interface TodoChangeState {
    type: TodoActionTypes.CHANGE_TODO
}

interface TodoChangeStateSuccess {
    type: TodoActionTypes.CHANGE_TODO_STATE_SUCCESS
    payload: ITodo
}

export type TodoAction = FetchTodosAction | FetchTodosSuccessAction | CreateTodoAction | CreateTodoSuccessAction | DeleteTodoAction | DeleteTodoActionSuccess | TodoChangeState | TodoChangeStateSuccess
