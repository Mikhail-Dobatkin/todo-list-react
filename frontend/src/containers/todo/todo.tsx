import React, { FC } from 'react'
import { ITodo } from '../../models/interface/interface'
import './style.css'

interface TodoProps {
    todo: ITodo
    deleteTodo: (id: ITodo['_id']) => void
    toggleIsCheck: (todo: ITodo) => void
}

const Task: FC<TodoProps> = ({ todo, deleteTodo, toggleIsCheck }) => {
  return (
    <div className='task'>
        <input type="checkbox" onChange={() => toggleIsCheck(todo)} checked={todo.isCheck} value={todo.title} />
        <p>{todo.title}</p>
        <button id={todo._id} className='btn-trash' onClick={() => deleteTodo(todo._id)}>Remove</button>
    </div>
  )
}

export default Task
