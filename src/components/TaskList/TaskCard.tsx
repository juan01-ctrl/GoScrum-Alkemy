import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext } from "react";
import { TasksContext } from "../views/TodoList";

import {
  CardContainer,
  CardTitle,
  CardDate,
  CardUser,
  CardTags,
  CardDescription,
  TagsContainer,
  CardClose
} from "./TaskCardElements";

type PropTypes = {
  title:string;
  status:string;
  importance:string;
  description:string;
date:Date
_id:string
}

const TaskCard = ({title,status,importance,description,date,_id}:PropTypes) => {
  const {tasks,setTasks} = useContext(TasksContext);
  

  const deleteRequest = async(_id:string) =>{
    try {
      const token =  localStorage.getItem("token")
  
      const config = {
        "headers": { Authorization: `Bearer ${token}` }
    }
      const res = await axios.delete(`https://goscrum-api.alkemy.org/task/${_id}`,config)
    } catch (error) {
      console.log(error)
    }
  } 

  const handleRemove = (_id:string) => {
    const removeCard = tasks.filter(el=> el._id !== _id)
    setTasks(removeCard)
    deleteRequest(_id)
    toast("Task deleted successfully!")
  }
  return (<>
     <CardContainer>
      <ToastContainer autoClose={2000} />

       <CardClose onClick={()=>handleRemove(_id)}/>
      <CardTitle>{title}</CardTitle>
      <CardDate>{((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()}, {date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</CardDate>
      <CardUser>User1</CardUser>
      <TagsContainer>
      <CardTags status={status}>{status}</CardTags>
      <CardTags>{importance}</CardTags>
      </TagsContainer>
      <CardDescription>
        {description}
      </CardDescription>
    </CardContainer>
    
  </>
 
  );
};

export default TaskCard;
