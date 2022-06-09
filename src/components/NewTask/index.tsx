import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext, useState } from "react";

import { TaskWithoutId } from "../../interfaces/tasksWithoutId";
import OrangeButton from "../Button";
import { TasksContext } from "../views/TodoList";

import {
  CreateTaskContainer,
  CreateTaskTitle,
  FormContainer,
  CreateTaskForm,
  FieldsContainer,
  NewTaskDescription,
  TextField,
  SelectFields,
} from "./NewTaskElements";

const NewTask = () => {
  const { setTasks, setIsLoading } = useContext(TasksContext);

  const initialForm: TaskWithoutId = {
    title: "",
    status: "",
    importance: "",
    description: "",
  };

  const [formTask, setFormTask] = useState<TaskWithoutId>(initialForm);
  const [error, setError] = useState<string>("");

  //* AXIOS REQUEST
  enum REQUEST {
    METHOD = "POST",
    URL = "https://goscrum-api.alkemy.org/task",
  }

  const PostTask = async (task: TaskWithoutId) => {
    // console.log({user:body})
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const { data } = await axios.post(REQUEST.URL, { task }, config);
      setTasks((prev) => [...prev, data.result.task]);
    } catch (error) {
      if (error instanceof Error) {
        return setError(error.message);
      }
      setError("Request Error");
    } finally {
      setIsLoading(false);
    }
  };

  //* Handles Events
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormTask({
      ...formTask,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setError("");
    e.preventDefault();

    const { title, status, importance, description } = formTask;
    // const newTask = {...formTask, id:tasks.length}

    if (
      !title.trim() ||
      status === "Select a state" ||
      !status ||
      !importance ||
      importance === "Select a priority" ||
      !description.trim()
    ) {
      setError("Please Complete All fields");
      return;
    }

    PostTask(formTask);
    toast("Task created successfully!");
  };

  return (
    <CreateTaskContainer>
      <ToastContainer autoClose={2000} />
      <CreateTaskTitle>Create Task</CreateTaskTitle>
      <FormContainer>
        <CreateTaskForm onSubmit={handleSubmit}>
          <FieldsContainer>
            <TextField
              placeholder="Title"
              name="title"
              type="text"
              onChange={handleChange}
              value={formTask.title}
            />
            <SelectFields
              name="status"
              onChange={handleChange}
              value={formTask.status}
            >
              <option>Select a state</option>
              <option value="NEW">New</option>
              <option value="IN PROGRESS">In Progress</option>
              <option value="FINISHED">Finished</option>
            </SelectFields>
            <SelectFields
              name="importance"
              onChange={handleChange}
              value={formTask.importance}
            >
              <option value="Select a priority">Select a priority</option>
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">Hight</option>
            </SelectFields>
          </FieldsContainer>
          <NewTaskDescription
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={formTask.description}
          />
          {error && <p className="error-task">{error}</p>}
          <OrangeButton buttonText="Create" marginTop="2em" type="submit" />
        </CreateTaskForm>
      </FormContainer>
    </CreateTaskContainer>
  );
};

export default NewTask;
