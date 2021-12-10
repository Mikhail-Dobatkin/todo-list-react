import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, changeTodo } from '../../store/action-creators/action'
import { TodosComponent } from './todos-component'
import { ITodo } from '../../models/interface/interface'
import './style.css'

export const TodosContainer = (): JSX.Element => {
  const dispatch = useDispatch()

  const toggleIsCheck = (todo: ITodo) => {
    const { _id, title, isCheck } = todo
    const body = {
      _id,
      title,
      isCheck: !isCheck
    }

    dispatch(changeTodo(body))
  }

  const removeTodo = async (id: ITodo['_id']): Promise<void> => {
    dispatch(deleteTodo(id))
  }

  return (
        <TodosComponent removeTodo={removeTodo} toggleIsCheck={toggleIsCheck} />
  )
}
