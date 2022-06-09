import React, { createContext, useCallback, useEffect, useState } from 'react'
import Nav from '../Nav'
import NewTask from '../NewTask'
import TaskList from '../TaskList'
import {Task} from '../../interfaces/tasks'
import axios from 'axios'

interface contextProps{
  tasks:Task[]
  setTasks:React.Dispatch<React.SetStateAction<Task[]>>
  setIsLoading:React.Dispatch<React.SetStateAction<boolean>>
isLoading:boolean
}

export const TasksContext = createContext<contextProps>({} as contextProps)

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
   const [isLoading, setIsLoading] = useState(false);
  
  //* AXIOS REQUEST
  enum REQUEST {
    METHOD = "POST",
    URL = "https://goscrum-api.alkemy.org/task"
    }
 
    const getTasks = useCallback(async() =>{
      // console.log({user:body})
      setIsLoading(true)
      try {
        const token =  localStorage.getItem("token")
        const config = {
          "headers": { Authorization: `Bearer ${token}` }
      }

      const {data} = await axios.get(REQUEST.URL,config)
      setTasks(data.result)
    } catch (error) {
      if(error instanceof Error){
       return alert(error.message)
      }
      alert("Request Error")
    }finally{
      setIsLoading(false)

    }
  },[REQUEST.URL])

  useEffect(() => {
  getTasks()
  }, [getTasks]);
// if(!localStorage.getItem("token"))return <Navigate to="/" replace/>
  return (
        <TasksContext.Provider value={{tasks,setTasks,isLoading,setIsLoading}}>
    <div>
        <Nav/>
        <section className='todo-section'>
        <NewTask/>
        <TaskList/>
        </section>
    </div>
        </TasksContext.Provider>
  )
}

export default TodoList