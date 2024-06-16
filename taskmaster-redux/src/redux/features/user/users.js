// usersApi.js

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios.get(`http://localhost:3000/api/users`);

  return response.data;
};

export const addUser = async (user) => {
  const response = await axios.post("http://localhost:3000/api/users", user);
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`http://localhost:3000/api/users/${id}`);
};

export const useUsers = (query) => {
  const {
    data: users,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", query],
    queryFn: () => fetchUsers(),
  });

  return {
    users,
    isLoading,
    error,
    refetch,
  };
};
