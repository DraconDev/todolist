import { Checkbox } from "@material-ui/core";
import { spawn } from "child_process";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/actions";
import rootReducer from "./../../redux/rootReducer";
import "./todo.css";

function Todo(props: any) {
	// const [checked, setChecked] = useState(false);
	const dispatch = useDispatch();
	console.log(props, "Todo");
	console.log(props.checked, "Todo");

	return (
		<div>
			<Checkbox
				checked={props.checked}
				// className={props.todo.checked && "checked"}
				// onChange={() => setChecked(!checked)}
				onChange={() => dispatch(toggleTodo(props.todo))}
				inputProps={{ "aria-label": "primary checkbox" }}
			/>
			{/* <span className="checked">{props.todo}</span> */}
			<span className={props.checked && "checked"}>{props.todo}</span>
			{/* <span className={props.checked ? "checked" : ""}>{props.todo}</span> */}
			{/* {props.checked ? (
				<span className="checked">{props.todo}</span>
			) : (
				<span>{props.todo}</span>
			)} */}
			<i
				className="fas fa-window-close"
				onClick={() => dispatch(deleteTodo(props.todo))}
			></i>
		</div>
	);
}

export default Todo;
