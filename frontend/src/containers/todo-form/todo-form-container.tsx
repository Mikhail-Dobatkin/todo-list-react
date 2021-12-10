import React, { useState } from 'react'
import { TodoFormComponent } from './todo-form-component'
import './style.css'
import { useDispatch } from 'react-redux'
import { createTodo } from '../../store/action-creators/action'

export const TodoFormContainer = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('')

  const dispatch = useDispatch()

  const setInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
  }

  const todoSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (inputValue.trim() === '') {
      return
    }

    const body = {
      _id: JSON.stringify(Date.now()),
      title: inputValue,
      isCheck: false
    }
    dispatch(createTodo(body))
    setInputValue('')
  }

  return (
         <TodoFormComponent
            inputValue={inputValue}
            setInputValueHandler={setInputValueHandler}
            todoSubmit={todoSubmit}
         />
  )
}
