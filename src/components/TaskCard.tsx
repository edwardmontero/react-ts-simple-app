import { task } from '../interface/Task';

interface props {
	task: task;
	deleteAtask: (id: number) => void;
}

export default function TaskCard({ task, deleteAtask }: props) {
	return (
		<div className="card card-body bg-secondary rounded-0 text-dark">
			<h2>{task.title}</h2>
			<p>{task.id}</p>
			<p>{task.description}</p>
			<button className="btn btn-danger" onClick={() => task.id && deleteAtask(task.id)}>
				Delete
			</button>
		</div>
	);
}
