import { useState } from 'react';
import './App.css';
import Logo from './logo.svg';
import { task } from './interface/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
interface Props {
	title?: string;
}

export function App({ title }: Props) {
	const [tasks, setTasks] = useState<task[]>([
		{
			id: 1,
			title: 'Lend React',
			description: 'Lend React',
			completed: false,
		},
	]);

	const getCurrentTimestamp = (): number => new Date().getTime();

	const addANewTask = (Task: task) =>
		setTasks([...tasks, { ...Task, id: getCurrentTimestamp(), completed: false }]);

	const deleteATask = (id: number) => setTasks(tasks.filter((task) => task.id !== id));

	return (
		<div className="bg-dark text-white" style={{ height: '100vh' }}>
			<nav className="navbar navbar-dark bg-primary">
				<div className="container">
					<a href="/" className="navbar-brand">
						<img src={Logo} alt="React Logo" style={{ width: '4rem' }} />
						{title && <h1>{title}</h1>}
					</a>
				</div>
			</nav>
			<main className="container p-4">
				<div className="row">
					<div className="col-md-4">
						<TaskForm addANewTask={addANewTask} />
					</div>

					<div className="col-md-8">
						<div className="row">
							<TaskList tasks={tasks} deleteAtask={deleteATask} />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
