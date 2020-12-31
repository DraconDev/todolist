import React from "react";
import { Box, Button } from "@material-ui/core";

interface Props {}

function List(props: Props) {
	return (
		<Box component="span" m={1}>
			<Button variant="contained">Default</Button>
		</Box>
	);
}

export default List;

