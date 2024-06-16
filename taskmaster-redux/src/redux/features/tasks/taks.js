// tasksApi.js

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchTasks = async (query) => {
  const response = await axios.get(`http://localhost:3000/api/tasks?searchTerm=${query}`);

  return response.data;
};

export const addTask = async (task) => {
  const response = await axios.post("http://localhost:3000/api/tasks", task);
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`http://localhost:3000/api/tasks/${id}`);
};

export const updateTaskStatus = async ({ id, status }) => {
  const response = await axios.put(`http://localhost:3000/api/tasks/${id}`, { status });
  return response.data;
};

export const useTasks = (query) => {
  const {
    data: tasks,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks", query],
    queryFn: () => fetchTasks(query),
  });

  return {
    tasks,
    isLoading,
    error,
    refetch,
  };
};
