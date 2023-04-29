import { createContext } from "react";


export const AppContext = createContext({
    onClick : ()=> {},
    login: () => {},
    logout: () => {},
    username : "raju kumar",
})