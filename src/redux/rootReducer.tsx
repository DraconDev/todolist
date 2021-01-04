const initialState = {
	// this is your initial state.
	// todos: [{ value: "socks", checked: false }], // variable inside your state, too keep track of the count.
	todos: ["socks"], // variable inside your state, too keep track of the count.
};

function rootReducer(state = initialState, action: any) {
	// console.log(state, state.counter, action, 'switch')
	switch (action.type) {
		case "todo/add":
			return { ...state, todos: [...state.todos, action.payload] };
		// return {
		// 	...state,
		// 	todos: [...state.todos, { value: action.payload, checked: false }],
		// };
		case "todo/delete":
			return {
				...state,
				todos: state.todos.filter((todo) => todo !== action.payload),
			};
		default:
			return state;
	}
}
export default rootReducer;
