import { Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/actions";
import rootReducer from "./../../redux/rootReducer";

function Todo(props: any) {
	const [checked, setChecked] = useState(false);
	const dispatch = useDispatch()

	return (
		<div>
			<Checkbox
				checked={checked}
				onChange={() => setChecked(!checked)}
				inputProps={{ "aria-label": "primary checkbox" }}
			/>
			<span>{props.todo}</span>
			<i
				className="fas fa-window-close"
				onClick={() => dispatch(deleteTodo(props.todo))}
			></i>
		</div>
	);
}

export default Todo;
