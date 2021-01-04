import React from "react";
import { Box, Button, Divider, Typography } from "@material-ui/core";
import { todoList } from "../../constant/todoList";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

interface Props {}

function List() {
	// console.log(todoList);
	// console.log(props);
	const todos = useSelector((state: any) => state.rootReducer.todos);
	console.log(todos, "list");
	return (
		<Box component="span" m={1}>
			{todos.map((e: any, i: any) => {
				return <Todo key={i} todo={e.value} checked={e.checked} />;
			})}
		</Box>
	);
}

export default List;
