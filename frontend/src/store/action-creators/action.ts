import { TodoActionTypes, CreateTodoSuccessAction } from '../types/typesTodo'
import { ITodo } from '../../models/interface/interface'

// todo getTodos

// todo tipisation for functions results
export const createTodo = (todo: ITodo): CreateTodoSuccessAction => ({
  type: TodoActionTypes.CREATE_TODO_SUCCESS,
  payload: todo
})

export const deleteTodo = (id: ITodo['_id']) => {
  return ({ type: TodoActionTypes.DELETE_TODO_SUCCESS, payload: id })
}
export const changeTodo = (todo: ITodo) => {
  return ({ type: TodoActionTypes.CHANGE_TODO_STATE_SUCCESS, payload: todo })
}
