import React from 'react'
import Todo from '../todo/todo'
import { ITodo } from '../../models/interface/interface'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'

interface TodosComponentProp {
    removeTodo: (id: ITodo['_id']) => void
    toggleIsCheck: (todo: ITodo) => void
}

export const TodosComponent = ({ removeTodo, toggleIsCheck }:TodosComponentProp): JSX.Element => {
  const todos = useSelector((state: RootState) => state.todos.todos)

  // todo separate function for map

  return (
        <div className='task-container'>
            {todos.map((todo: ITodo) => {
              return <Todo key={`${todo._id}_${todo.title}`}
                             todo={todo}
                             removeTodo={removeTodo}
                             toggleIsCheck={(todo) => toggleIsCheck(todo)} />
            })}
        </div>
  )
}
