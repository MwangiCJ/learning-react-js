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
  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks}/>
    </div>
  );
} 

export default App;
