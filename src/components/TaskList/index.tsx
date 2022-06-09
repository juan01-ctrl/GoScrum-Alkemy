import React, {useContext, useEffect, useRef, useState} from 'react'
import { Task } from '../../interfaces/tasks'
import Loader from '../Loader/Loader'

import {TextField,
  SelectFields} from "../NewTask/NewTaskElements"
import { TasksContext } from '../views/TodoList'
import TaskCard from './TaskCard'
import {TaskListSection,TaskListContainer,TaskListTitle,TaskListFilter,TaskCardsContainer,TaskState,TaskStateTitle } from './TaskListElements'



const TaskList = () => {
  const {tasks,isLoading} = useContext(TasksContext);



  const [priority, setPriority] = useState("");;
  const [search, setSearch] = useState("");


//* Instance useRef for Debounce
const debounceRef = useRef<NodeJS.Timeout>()


//* Handles


const onQueryChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  if(debounceRef.current) clearTimeout(debounceRef.current)
  debounceRef.current = setTimeout(()=>{
    setSearch(e.target.value)
   
  },1000)
}


const onPriorityChange = (e:React.ChangeEvent<HTMLSelectElement>) =>{
setPriority(e.target.value)
}

//* Filter Functions

const filterByPriority = () =>  tasks?.filter(task => task.importance === priority)

const filterByTitle = (state:string) => tasks?.filter(task => task.status === state && task.title.includes(search))




  return (
    <TaskListSection>
     
    <TaskListContainer>
      <TaskListTitle>My Tasks</TaskListTitle>
      <h3>Created Tasks:{tasks.length}</h3>
      <TaskListFilter>
        <TextField name="title" placeholder="Filter by Title..." onChange={onQueryChange}/>
        <SelectFields
              name="priority"
              onChange={onPriorityChange}
              // value={formTask.priority}
            >
              <option value="">Filter by priority</option>
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
            </SelectFields>
      </TaskListFilter>
      <TaskCardsContainer>
        
          {
          
          !priority.length ? 
      ( <> <TaskState>
            <TaskStateTitle>New</TaskStateTitle>
            {isLoading ? <Loader/> : 
            filterByTitle("NEW").length ? filterByTitle("NEW").map((task,i)=> 
              
             <TaskCard title={task.title}  status={task.status} importance={task.importance} description={task.description} date={new Date()} _id={task._id} key={i} /> 
              ) : <p className='empty-task'>No New tasks yet...</p>}
        </TaskState>
        <TaskState>
        <TaskStateTitle>In Progress</TaskStateTitle>
        {isLoading ? <Loader/> : 
        filterByTitle("IN PROGRESS").length ? filterByTitle("IN PROGRESS")?.map((task,i)=> 
              
              <TaskCard title={task.title}  status={task.status} importance={task.importance} description={task.description}  date={new Date()}  _id={task._id} key={i}/> 
               ) : <p className='empty-task'>No tasks In Progress yet...</p>}
        </TaskState>
        <TaskState>
        <TaskStateTitle>Finished</TaskStateTitle>
        {isLoading ? <Loader/> :  
        filterByTitle("FINISHED").length ? filterByTitle("FINISHED")?.map((task,i)=> 
              
              <TaskCard title={task.title}  status={task.status} importance={task.importance} description={task.description}  date={new Date()} _id={task._id} key={i}/> 
               ) : <p className='empty-task'>No tasks Finished yet...</p>}
        </TaskState>
          </> 
          )
          
          :  <TaskState>
          <TaskStateTitle>{priority}</TaskStateTitle>
          {isLoading ? <Loader/> : 
          filterByPriority()?.length ? filterByPriority()?.map((task,i)=> 
              
                <TaskCard title={task.title}  status={task.status} importance={task.importance} description={task.description}  date={new Date()}  _id={task._id} key={i}/> 
                 ) : <p className='empty-task'>No {priority} priority tasks...</p>}
          </TaskState>
           }
      </TaskCardsContainer>
    </TaskListContainer>
    </TaskListSection>
  )
}

export default TaskList