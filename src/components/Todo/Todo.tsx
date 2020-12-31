import { Checkbox } from "@material-ui/core";
import React, { useState } from "react";

function Todo(props: any) {
	const [checked, setChecked] = useState(false);
	console.log("todo", props);
	return (
		<div>
			{props.todo}
			<Checkbox
				checked={checked}
				onChange={() => setChecked(!checked)}
				inputProps={{ "aria-label": "primary checkbox" }}
			/>
			<i
				className="fas fa-window-close"
				onClick={() => console.log("test")}
			></i>
		</div>
	);
}

export default Todo;
