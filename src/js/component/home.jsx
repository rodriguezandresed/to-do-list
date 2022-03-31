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

	// Aca se agregan los tasks
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
		if (event.key != "Enter") {
			setTaskToDo([...taskToDo, taskVar]);
			setTaskVar(initialState);
			setError(false);
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
