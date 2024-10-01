
import { createContext } from "react";

export const AddformContext = createContext()

export const AddformProvider = ({ children }) => {
    return (<AddformContext.Provider>
        {children}
    </AddformContext.Provider>)
}