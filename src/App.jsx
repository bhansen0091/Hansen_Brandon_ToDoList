import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css';
import Task from './components/Task/Task';
import TaskGenerator from './components/TaskGenerator/TaskGenerator';

function App() {

  const [tasks, setTasks] = useState([]);
  
  const [task, setTask] = useState({
    description: "",
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
    })
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
