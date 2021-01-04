
const initialState = { // this is your initial state.
  todos: ['socks'], // variable inside your state, too keep track of the count.
};

function rootReducer(state = initialState, action: any) {
	// console.log(state, state.counter, action, 'switch')
	switch (action.type) {
		case "todo/add":
			return {state, todos: [...state.todos, action.payload]};
		case "todo/delete":
			return {...state, todos: state.todos.filter( todo => todo !== action.payload)};
		default:
			return state;
	}
}
export default rootReducer