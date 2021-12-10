import { TodoAction, TodoActionTypes, TodoState } from '../types/typesTodo'
import { ITodo } from '../../models/interface/interface'

const initialState: TodoState = {
  todos: []
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { todos: [] }
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { todos: action.payload }
    case TodoActionTypes.CREATE_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, action.payload] }
    case TodoActionTypes.DELETE_TODO_SUCCESS:
      return { ...state, todos: state.todos.filter(todo => todo._id !== action.payload) }
    case TodoActionTypes.CHANGE_TODO_STATE_SUCCESS:
      return {
        ...state,
        todos: [...state.todos.map((todo: ITodo) => {
          console.log(todo, action.payload)
          if (todo._id === action.payload._id) {
            todo.isCheck = !todo.isCheck
          }
          return todo
        })]
      }
    default:
      return state
  }
}
