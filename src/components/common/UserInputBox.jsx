import React from 'react'

function UserInputBox({inputText, trigger, displayText}) {
  return (   
    <input
        type = "text"
        value={inputText}        
        onChange={trigger}
        placeholder={displayText}
    />
  )
}

export default UserInputBox