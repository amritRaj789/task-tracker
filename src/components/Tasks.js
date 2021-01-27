import Task from './Task';


const Tasks = ({tasks}) => {

	return (
	<>
		{tasks.map((task) => <Task id={task.id} task={task}/>)}
	</>
	)
}

export default Tasks;