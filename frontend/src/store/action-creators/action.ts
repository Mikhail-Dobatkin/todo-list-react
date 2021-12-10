import { TodoActionTypes } from '../types/typesTodo'
import { ITodo } from '../../models/interface/interface'

export const createTodo = (todo: ITodo) => {
  return ({ type: TodoActionTypes.CREATE_TODO_SUCCESS, payload: todo })
}
export const deleteTodo = (id: ITodo['_id']) => {
  return ({ type: TodoActionTypes.DELETE_TODO_SUCCESS, payload: id })
}
export const changeTodo = (todo: ITodo) => {
  return ({ type: TodoActionTypes.CHANGE_TODO_STATE_SUCCESS, payload: todo })
}
