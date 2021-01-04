import React from "react";
import "./App.css";
import { useState } from "react";
import List from "./components/List/List";
import { Box, Button } from "@material-ui/core";
import Todo from "./components/Todo/Todo";
import InputTodo from "./components/InputTodo/InputTodo";

function App() {
	return (
		<Box className="App">
			<InputTodo></InputTodo>
			<List></List>
		</Box>
	);
}

export default App;
