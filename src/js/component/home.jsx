import React, { useState } from "react";
import InputTask from "./InputTask.jsx";
import ToDoList from "./ToDoList.jsx";

//create your first component
const Home = () => {
	let initialState = {
		task: "",
	};

	//objeto de tasks
	const [taskToDo, setTaskToDo] = useState([]);
	// task individual
	const [taskVar, setTaskVar] = useState(initialState);
	const [error, setError] = useState(false);

	const handleChangeTask = (event) => {
		setTaskVar({
			//crea una copia del objeto para que mantenga los valores (el ...array)
			...taskVar,
			[event.target.name]: event.target.value,
		});
	};

	// Aca se agregan los tasks en forma de boton
	// const handleAddTask = () => {
	// 	if (taskVar.task.trim() != "") {
	// 		setTaskToDo([...taskToDo, taskVar]);
	// 		setTaskVar(initialState);
	// 		setError(false);
	// 	} else {
	// 		setError(true);
	// 	}
	// };

	const handleAddTask = (event) => {
		event.stopPropagation();
		if (event.key === "Enter" && taskVar.task.trim() != "") {
			setTaskToDo([...taskToDo, taskVar]);
			setTaskVar(initialState);
			setError(false);
			event.preventDefault();
		} else {
			setError(true);
		}
	};

	// para borrar
	const handleDelete = (id) => {
		let newTasks = taskToDo.filter((item, index) => index != id);
		setTaskToDo(newTasks);
	};

	return (
		<>
			<div className="container">
				<div className="d-flex justify-content-center pt-4">
					<h1>To Do!</h1>
				</div>

				<InputTask
					taskVar={taskVar}
					handleChangeTask={handleChangeTask}
					handleAddTask={handleAddTask}
				/>
				<ToDoList taskToDo={taskToDo} handleDelete={handleDelete} />
			</div>
		</>
	);
};

export default Home;
