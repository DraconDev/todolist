import React from "react";
import { Box, Button, Divider, Typography } from "@material-ui/core";
import { todoList } from "../../constant/todoList";
import Todo from "../Todo/Todo";

interface Props {}

function List(props: Props) {
	// console.log(todoList);
	console.log(props);
	return (
		<Box component="span" m={1}>
			{props.todos.map((e, i) => {
				return <Todo key={i} todo={e}/>;
			})}
		</Box>
	);
}

export default List;
