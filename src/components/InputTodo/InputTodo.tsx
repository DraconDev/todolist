import { Button } from "@material-ui/core";
import React, { useState } from "react";

interface Props {}

function InputTodo(props: Props) {
	const [input, setInput] = useState("test");

	function handleChange(event: any) {
		event.preventDefault();
		setInput(event.target.value);
	}

	function handleAddtodo(todo) {
		if (input.length > 0) {
			props.addTodo(todo);
			setInput("");
		}
	}

	return (
		<div>
			<input value={input} type="text" onChange={handleChange} />
			<Button variant="contained" onClick={() => handleAddtodo(input)}>
				Add todo
			</Button>
		</div>
	);
}

export default InputTodo;
