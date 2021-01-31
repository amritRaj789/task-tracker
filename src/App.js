import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Buy Tissue paper roll",
      day: "January 26th at 4:00 pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Clean imbecile people off my room",
      day: "January 28th at 2:00 pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Binge watch all of Shingeki no Kyojin",
      day: "January 26th at 4:00 pm",
      reminder: false,
    }
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))  
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      if(task.id === id)
        task.reminder = !task.reminder;
      return task;
    }))
  }
/*  //Add new Task
  const addTask = (task) =>  {
    const taskList = [...tasks, task];
    setTasks(taskList);
  }*/

  /*const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].name);
    const newTask = {
      id: tasks.length+1,
      text: e.target[0].value,
      day: e.target[1].value,
      reminder: (e.target[2].value==='on') ? true : false
    }
    addTask(newTask);
    e.target[0].value = "";
  }*/

  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        : <h2>No Tasks to show</h2>
      }
    </div>
  );
}

export default App;
