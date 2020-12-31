import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { todos } from "../../constant/todos";

interface Props {}

function List(props: Props) {
	return (
		<Box component="span" m={1}>
			<Button variant="contained">Default</Button>
			{todos.map( e => {<Typography> {e}</Typography>})}
		</Box>
	);
}

export default List;

