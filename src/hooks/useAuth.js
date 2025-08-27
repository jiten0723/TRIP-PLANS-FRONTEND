import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => useContext(AuthContext); //AthContext is converted in to arrow function and assign in to the useAuth so we can access the 4 variables in a single variable

export default useAuth;
