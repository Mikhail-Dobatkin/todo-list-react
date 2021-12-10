import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoActionTypes } from '../../store/types/typesTodo'
import { RootState } from '../../store/reducers'
import { TodosContainer } from '../todos-container/todos-container'
import { TodoFormContainer } from '../todo-form/todo-form-container'

export const MainContainer = (): JSX.Element => {
  const dispatch = useDispatch()

  useSelector((state: RootState) => state.todos.todos)

  // todo create action
  const fetchTodos = () => {
    return (dispatch(({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: [] })))
  }

  // todo esint rule for semilicon
  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <>
      <TodoFormContainer />
      <TodosContainer />
    </>
  )
}
