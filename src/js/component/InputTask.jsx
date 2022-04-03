import React from "react";
import PropTypes from "prop-types";

const InputTask = ({ taskVar, handleChangeTask, handleAddTask }) => {
	return (
		<form>
			<div className="form-group pt-4">
				<input
					type="text"
					placeholder="What needs to be done?"
					className="form-control"
					name="task"
					value={taskVar.task}
					onKeyDown={handleAddTask}
					onChange={handleChangeTask}
				/>
			</div>
			{/* <button
				type="button"
				className="btn btn-primary w-100 my-3"
				onClick={handleAddTask}>
				Guardar
			</button> */}
		</form>
	);
};

InputTask.propTypes = {
	taskVar: PropTypes.object,
	handleChangeTask: PropTypes.func,
	handleAddTask: PropTypes.func,
};

export default InputTask;
