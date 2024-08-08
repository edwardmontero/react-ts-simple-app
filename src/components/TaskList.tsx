import { task } from '../interface/Task';
import TaskCard from './TaskCard';

interface Props {
	tasks: task[];
	deleteAtask: (id: number) => void;
}

export default function TaskList({ tasks, deleteAtask }: Props) {
	return (
		<>
			{tasks.map((task) => (
				<div className="col-md-4 pb-2" key={task.id}>
					<TaskCard task={task} deleteAtask={deleteAtask} />
				</div>
			))}
		</>
	);
}
