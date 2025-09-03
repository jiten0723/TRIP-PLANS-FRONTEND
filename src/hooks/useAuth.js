import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => useContext(AuthContext); //AuthContext is converted in to arrow function and assign in to the useAuth so we can access the 4 variables in a single variable

export default useAuth; //exporting the useAuth function so we can use it in other files
