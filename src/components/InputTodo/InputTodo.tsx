import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./../../redux/actions";

interface Props {}

function InputTodo(props: Props) {
	const [input, setInput] = useState("test");
	const dispatch = useDispatch();

	function handleChange(event: any) {
		event.preventDefault();
		setInput(event.target.value);
	}

	function handleAddtodo(todo: any) {
		if (input.length > 0) {
			// props.addTodo(todo);
			dispatch(addTodo(todo));
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
