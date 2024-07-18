import React from 'react'
import { useState } from "react"

export default function TodoInput(props) {
    const {todoVal, setTodoVal, handleAddTodos} = props

    return (
        <header>
            <input value={todoVal} onChange={(e) => {
                setTodoVal(e.target.value)
            }} onplaceholder="Enter todo..." />
            <button onClick={() => {
                handleAddTodos(todoVal)
                setTodoVal('')
            }}>Add</button>
        </header>
    )
}
