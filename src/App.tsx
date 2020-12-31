import React from "react";
import "./App.css";
import { useState } from "react";
import List from "./components/List/List";
import { Box, Button } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const [state, setState] = useState("");
	return (
		<Box className="App">
			<Navbar></Navbar>
			<Button>Hey</Button>
			<List></List>
		</Box>
	);
}

export default App;
