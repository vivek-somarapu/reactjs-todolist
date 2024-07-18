import React from 'react'
import { useState } from "react"

export default function TodoInput(props) {
    const {todoVal, setTodoVal, handleAddTodos} = props

    const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleAddTodos(todoVal)
			setTodoVal('')
		}
	}
    
    return (
        <header>
            <input 
                value={todoVal} 
                onChange={(e) => {setTodoVal(e.target.value)}} 
                onplaceholder="Enter todo..." 
                onKeyPress={handleKeyPress}
            />
            <button onClick={() => {
                handleAddTodos(todoVal)
                setTodoVal('')
            }}>Add</button>
        </header>
    )
}
