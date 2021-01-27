import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

const App = () => {

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
  return (
    <div className="container">
      <Header title="Hello Stupid"/>
      <Tasks/>
    </div>
  );
}

export default App;
