import React, { FC } from 'react'

interface TodoFormComponentProp {
    setInputValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    todoSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    inputValue: string;
}

export const TodoFormComponent: FC<TodoFormComponentProp> = ({ setInputValueHandler, todoSubmit, inputValue }) => {
  return (
        <div className='task-add'>
            <input type="text" placeholder='Title' onChange={setInputValueHandler} value={inputValue} />
            <button type='submit' onClick={todoSubmit}>Add</button>
        </div>
  )
}
