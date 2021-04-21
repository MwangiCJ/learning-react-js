import Task from './Task'
const Tasks = (props) => {
    
    return (
        <>
          {props.tasks.map((task)=>(
              <Task key={task.id} task={task} 
              onDelete={props.onDelete}
              onToggle={props.onToggle}/>

          ))}  
        </>
    )
}

export default Tasks
//State is immutable, you cannot change directly. You recreate and send it down. It's one way data