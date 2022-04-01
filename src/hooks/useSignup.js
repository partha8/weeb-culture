import { useEffect } from "react";
import { useAuthContext } from "../context/AuthProvider";
import { useStateContext } from "../context/StateProvider";

export const useSignup = async () => {
  const { signup } = useAuthContext();
  const { toastHandler } = useStateContext();
  const person = {
    firstName: "Partha",
    lastName: "Sarma",
    email: "partha@gmail.com",
    password: "12",
  };

  useEffect(() => {
    signup(person, toastHandler);
  }, []);
};
