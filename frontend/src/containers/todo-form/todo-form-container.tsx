import React, { useState } from 'react'
import TodoService from '../../service/todoService/TodoService'
import { ITodo } from '../../models/interface/interface'
import { TodoFormComponent } from './todo-form-component'
import './style.css'

interface TodoFormProp {
    newTaskHandler: (task: ITodo) => void
}

export const TodoFormContainer = ({ newTaskHandler }: TodoFormProp) => {
  const [inputValue, setInputValue] = useState<string>('')

  const createTodo = async (body: ITodo) => {
    try {
      const todo: ITodo = await TodoService.createNewTodo(body)
      newTaskHandler(todo)
    } catch (e) {
      console.log('Error in function createTask', e)
    }
  }

  const setInputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
  }

  const todoSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (inputValue.trim() === '') {
      return
    }

    const body: ITodo = {
      title: inputValue,
      isCheck: false
    }

    try {
      await createTodo(body)
      setInputValue('')
    } catch (e) {
      console.log('Error in function createTask')
    }
  }

  return (
         <TodoFormComponent
            inputValue={inputValue}
            setInputValueHandler={setInputValueHandler}
            todoSubmit={todoSubmit}
         />
  )
}
