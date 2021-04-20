import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Food shopping',
        day: 'Feb 4th at 2:30pm',
        reminder: false
    },
    {
        id: 2,
        text: 'Deploy application',
        day: 'Feb 5th at 10:00am',
        reminder: true
    },
    {
        id: 3,
        text: 'Car Wash',
        day: 'Feb 6th at 12:20pm',
        reminder: false
    }
])

const addTask = (task)=>{
  console.log(task)
  const id = Math.max(Math.random() * 10000 ) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

const deleteTask = (id) =>{
  
  setTasks(tasks.filter((tasks) => tasks.id !==id))
  console.log('delete '+id)
}


const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id===id ? {...task, reminder: ! task.reminder} : task))
  console.log('toggle '+id)
}

  return (
    <div className="container" >
     <Header onShowAdd= {()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask} />
     //if(showAddTask){showAddTask && <AddTask onAdd={addTask}}
     }
     

     {
       tasks.length > 0 ? (
        <Tasks tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}/>
       ):
       ('No Tasks To Show')
     }
    </div>
  );
} 

export default App;
