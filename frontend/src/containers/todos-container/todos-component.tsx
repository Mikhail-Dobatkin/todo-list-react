import React from 'react'
import Todo from '../todo/todo'
import { ITodo } from '../../models/interface/interface'

interface TodosComponentProp {
    todos: ITodo[]
    deleteTodo: (id: ITodo['_id']) => void
    toggleIsCheck: (todo: ITodo) => void
}

export const TodosComponent = ({ todos, deleteTodo, toggleIsCheck }:TodosComponentProp): JSX.Element => {
  return (
        <div className='task-container'>
            {todos.map((todo) => {
              return <Todo key={`${todo._id}_${todo.title}_${todos.length}`}
                             todo={todo}
                             deleteTodo={deleteTodo}
                             toggleIsCheck={(todo) => toggleIsCheck(todo)} />
            })}
        </div>
  )
}
