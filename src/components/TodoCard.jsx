import React from 'react'

export default function TodoCard(props) {
    const {children, deleteTodo, index, editTodo} = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
				<button onClick={()=>{
					editTodo(index)
				}}>
					<i class="fa-regular fa-pen-to-square"></i>
				</button>
				<button onClick={() => {
					deleteTodo(index)
				}}>
					<i class="fa-regular fa-trash-can"></i>
				</button>
            </div>
        </li>
    )
}
