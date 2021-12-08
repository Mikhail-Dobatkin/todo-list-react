import { useState } from 'react'
import { PopupComponent } from './popup-component'
import TodoService from '../../service/todoService/TodoService'
import { ITodo } from '../../models/interface/interface'

interface PopupContainerProp {
    changeTodoHandler: (changeTask: ITodo, id: ITodo['_id']) => void
}

export const PopupContainer = ({ changeTodoHandler }: PopupContainerProp): JSX.Element => {
  const [editedTitle, setEditTitle] = useState('')

  // eslint-disable-next-line no-unused-vars
  const changeTodo = async (body: ITodo, id: ITodo['_id']): Promise<void> => {
    try {
      const updatedTodo: ITodo = await TodoService.updateTodo(body)
      changeTodoHandler(body, id)
      console.log(updatedTodo)
      console.log(changeTodo)
    } catch (e) {
      console.log('Error in ChangeTodo function', e)
    }
  }

  const popupInputHandler = (e: any) => {
    const value = e.target.value
    setEditTitle(value)
  }

  const popupBtnHandler = async () => {
    const value = editedTitle
    const body = {
      title: value
    }

    try {
      // await changeTodo(body, idChangeableTodo)
      console.log('I`M popupBTNHANDLER', body)
    } catch (e) { console.log('error on changeTodo function', e) }
  }

  return (
  // eslint-disable-next-line react/react-in-jsx-scope
        <PopupComponent
            popupBtnHandler={popupBtnHandler}
            popupInputHandler={popupInputHandler} />
  )
}
