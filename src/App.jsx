import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState, useEffect } from "react"

function App() {

	const [todos, setTodos] = useState([])
    const [todoVal, setTodoVal] = useState('')


	function persistData(newList){
		localStorage.setItem('todos', JSON.stringify({todos: newList}))
	}

	function handleAddTodos(newTodo) {
		const newTodoList = [...todos, newTodo]
		persistData(newTodoList)
		setTodos(newTodoList)
	}

	function deleteTodo(index){
		const newTodoList = todos.filter((todo, todoIndex) => {
			return todoIndex !== index
		})
		persistData(newTodoList)
		setTodos(newTodoList)
	}

	function editTodo(index){
		const editedVal = todos[index]
		setTodoVal(editedVal)
		deleteTodo(index)
	}

	useEffect(() => {
		if(!localStorage){
			return
		}

		let localTodos = localStorage.getItem('todos')
		if (!localTodos) {
			return
		}
		localTodos = JSON.parse(localTodos).todos
		setTodos(localTodos)
	}, [])

	return (
	<>
		<TodoInput todoVal={todoVal} setTodoVal={setTodoVal} handleAddTodos = {handleAddTodos}/>
		<TodoList deleteTodo={deleteTodo} editTodo={editTodo} todos={todos}/>
	</>
	)
}

export default App
