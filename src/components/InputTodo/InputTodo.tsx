import { Button } from "@material-ui/core";
import React, { useState } from "react";

interface Props {}

function InputTodo(props: Props) {
	const [input, setInput] = useState("test");

	function handleChange(event: any) {
		event.preventDefault();
		setInput(event.target.value);
	}

	return (
		<div>
			<input value={input} type="text" onChange={handleChange} />
			<Button variant="contained">Add todo</Button>
		</div>
	);
}

export default InputTodo;
