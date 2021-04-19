import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
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
     <Header />
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
