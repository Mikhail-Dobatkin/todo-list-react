import React, { useEffect, useState } from 'react'
import TodoService from '../../service/todoService/TodoService'
import { TodosContainer } from '../todos-container/todos-container'
import { ITodo } from '../../models/interface/interface'
import { TodoFormContainer } from '../todo-form/todo-form-container'

export const MainContainer = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const fetchTodos = async (): Promise<void> => {
    try {
      const getTodos = await TodoService.getAllTodos()
      return setTodos(getTodos.reverse())
    } catch (e) {
      console.log('Error in fetchTodos', e)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const newTaskHandler = (newTask: ITodo) => {
    setTodos([newTask, ...todos])
  }

  return (
            <>
                <TodoFormContainer newTaskHandler={newTaskHandler} />
                <TodosContainer
                    fetchTodos={fetchTodos}
                    todos={todos}
                    setTodos={setTodos}
                />
            </>
  )
}
