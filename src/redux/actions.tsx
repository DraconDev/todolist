import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction<string>("todo/add");
export const deleteTodo = createAction<string>("todo/delete");
