import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css';
import Task from './components/Task/Task';
import TaskGenerator from './components/TaskGenerator/TaskGenerator';

function App() {

  const [tasks, setTasks] = useState([]);
  
  const [task, setTask] = useState({
    description: "",
    isComplete: false
  });

  const handleChanges = (e) => {
    setTask({
      ...task,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((oldTasks) => [...oldTasks, task]);
    setTask({
      description: "",
      isComplete: false
    })
  }

  const handleIsComplete = (idx) => {
        tasks.forEach((t,i) => {
      if (i === idx) {
        t.isComplete = !t.isComplete;
      }
    }) 
    setTasks([...tasks])
  }

  const handleRemoveTask = (idx) => {
    setTasks(oldTasks => [...oldTasks.slice(0,idx),...oldTasks.slice(idx + 1)])
  }

  return (
    <div className="App d-flex flex-column align-items-center">
      <div className="col-10">
        <TaskGenerator
          inputs = {task}
          handleInputChange = {handleChanges}
          handleTaskCreate = {handleSubmit}
        />
      </div>
      <div className="col-10">
        <div className="col-12">
          {
            tasks.map( (t,i) => 
              <Task
                key = {i}
                idx = {i}
                taskDescription = {t.description}
                isComplete = {t.isComplete}
                handleIsComplete = {handleIsComplete}
                handleDeleteTask = {handleRemoveTask}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
