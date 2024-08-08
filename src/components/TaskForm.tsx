import { AiOutlinePlus } from 'react-icons/ai';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { task } from '../interface/Task';

interface props {
	addANewTask: (task: task) => void;
}

type handleinputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
	title: '',
	description: '',
};

export default function TaskForm({ addANewTask }: props) {
	const [task, setTask] = useState<task>(initialState);
	const inputTitle = useRef<HTMLInputElement>(null);
	const handleinputChange = ({ target: { name, value } }: handleinputChange) => {
		setTask({ ...task, [name]: value });
	};

	const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addANewTask(task);
		setTask(initialState);
		inputTitle.current?.focus();
	};

	return (
		<div className="card card-body bg-secondary text-dark">
			<h1>Add Task</h1>
			<form onSubmit={handleNewTask}>
				<input
					type="text"
					placeholder="write a title"
					name="title"
					className="form-control mb-3 rounded-0 shadow-none border-0"
					onChange={handleinputChange}
					value={task.title}
					autoFocus
					ref={inputTitle}
				/>
				<textarea
					name="description"
					rows={2}
					placeholder="write a Description"
					className="form-control mb-3 shadow=none 'border-0"
					onChange={handleinputChange}
					value={task.description}
				></textarea>

				<button className="btn btn-primary">
					Save
					<AiOutlinePlus />
				</button>
			</form>
		</div>
	);
}
