import React from 'react'
import TodoService from '../../service/todoService/TodoService'
import { TodosComponent } from './todos-component'
import { ITodo } from '../../models/interface/interface'
import './style.css'

interface TodosContainerProp {
    fetchTodos: () => void
    todos: ITodo[]
    setTodos: (body: ITodo[]) => void
}

export const TodosContainer = ({ todos, setTodos }: TodosContainerProp): JSX.Element => {
  const changeTodoState = (changedTodo: any) => {
    todos.map((todo: ITodo) => {
      if (changedTodo.id === todo._id) {
        todo.isCheck = !todo.isCheck
      }
      return todo
    })
    setTodos([...todos])
  }

  const toggleIsCheck = async (todo: ITodo): Promise<void> => {
    try {
      const { _id, title, isCheck } = todo
      const body = {
        id: _id,
        title,
        isCheck: !isCheck
      }
      await TodoService.updateTodo(body)
      changeTodoState(body)
    } catch (e) {
      console.log('Error in toggleIsCheck function', e)
    }
  }

  const deleteTodo = async (id: ITodo['_id']): Promise<ITodo | void> => {
    try {
      const todo: ITodo = await TodoService.deleteTodo(id)

      const newArrTodos = todos.filter(task => {
        return task._id !== todo._id
      })
      setTodos(newArrTodos)
    } catch (e) {
      console.log('Error in function deleteTodo', e)
    }
  }

  return (
        <TodosComponent todos={todos} deleteTodo={deleteTodo} toggleIsCheck={toggleIsCheck} />
  )
}
