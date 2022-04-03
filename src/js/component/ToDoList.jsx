import React from "react";
import PropTypes from "prop-types";

const ToDoList = ({ taskToDo, handleDelete }) => {
	return (
		<div className="m-0">
			<ul className="list-group m-0">
				{taskToDo.map((item, index) => (
					<div key={index}>
						<li
							key={index}
							className="list-group-item"
							onClick={() => handleDelete(index)}>
							{item.task}
						</li>
					</div>
				))}
				<li className="list-group-item">
					{taskToDo.length} items left!
				</li>
			</ul>
		</div>
	);
};

ToDoList.propTypes = {
	TaskToDo: PropTypes.array,
};

export default ToDoList;
