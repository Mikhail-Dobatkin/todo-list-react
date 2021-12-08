import { TodoAction, TodoActionTypes, TodoState } from '../types/typesTodo'

const initialState: TodoState = {
  todos: []
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState | undefined => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { todos: [] }
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { todos: action.payload }
    default:
      return state
  }
}
