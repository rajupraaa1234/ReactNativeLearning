import React, {createContext} from "react";
import { AppStore } from "../store/AppStore";
import { LoginStore } from "../store/LoginStore";


export const storeContext = createContext({
    appStore : new AppStore(),
    loginStore : new LoginStore(),
})