import React from 'react'

interface PopupComponentProp {
    popupBtnHandler: () => void
    popupInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const PopupComponent = ({ popupBtnHandler, popupInputHandler }: PopupComponentProp): JSX.Element => {
  return (
        <div>
            <input type="text" placeholder='Title' onChange={popupInputHandler} />
            <button type='submit' onClick={popupBtnHandler}>Edit</button>
        </div>
  )
}
