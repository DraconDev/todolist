import React from "react";
import "./App.css";
import { useState } from "react";
import List from "./components/List/List";
import { Box, Button } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Todo from "./components/Todo/Todo";
import InputTodo from "./components/InputTodo/InputTodo";

function App() {
	const [todos, setTodos] = useState(["exercise", "eat"]);

	function addTodo(todo: any) {
		return setTodos([...todos, todo])
	}

	return (
		<Box className="App">
			<InputTodo addTodo={addTodo}></InputTodo>
			<List todos={todos}></List>
		</Box>
	);
}

export default App;
