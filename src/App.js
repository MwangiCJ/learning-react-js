import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState, useEffect } from 'react'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect (()=>{ //fires on page load
    const getTasksOnPageLoad = async() =>{
      const tasksFromServer  = await fetchTasksFromServer()
      setTasks(tasksFromServer)
    }

    getTasksOnPageLoad()
  }, [])


  const fetchTasksFromServer = async() =>{
    const res  = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return (data)
  }

  const fetchSingleTaskFromServer = async(id) =>{
    const res  = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return (data)
  }

  const addTask = async (task)=>{
    console.log(task)
    //const id = Math.max(Math.random() * 10000 ) + 1
    const res = await fetch('http://localhost:5000/tasks',{
      method:"POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    
    setTasks([...tasks, data])
  }

const deleteTask = async (id) =>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: "DELETE"
  })
  setTasks(tasks.filter((tasks) => tasks.id !==id))
  console.log('delete '+id)
}


const toggleReminder = async (id) =>{
  const taskToToggle = await fetchSingleTaskFromServer(id)
  const updatedTask = {...taskToToggle, reminder:!taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

  setTasks(tasks.map((task) => task.id===id ? {...task, reminder: data.reminder} : task))
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
