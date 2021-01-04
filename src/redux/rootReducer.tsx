const initialState = {
	// this is your initial state.
	todos: [{ value: "socks", checked: false }], // variable inside your state, too keep track of the count.
	// todos: ["socks"], // variable inside your state, too keep track of the count.
};

function rootReducer(state = initialState, action: any) {
	// console.log(state, state.counter, action, 'switch')
	switch (action.type) {
		case "todo/add":
			// return { ...state, todos: [...state.todos, action.payload] };
			return {
				...state,
				todos: [...state.todos, { value: action.payload, checked: false }],
			};
		case "todo/delete":
			return {
				...state,
				todos: state.todos.filter((todo) => todo.value !== action.payload),
			};
		case "todo/toggle":
			console.log(action, "toggle");
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.value === action.payload) {
						return { ...todo, checked: !todo.checked };
					}
					return todo;
				}),
			};
		default:
			return state;
	}
}
export default rootReducer;
