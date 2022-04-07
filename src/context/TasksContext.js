import {useContext, useReducer, useState} from "react";
import React from "react";
import {newTask,deleteTask} from "../actions/TodoActions";
import TodoReducer from "../reducers/TodoReducer";
const AppContext = React.createContext(); //Context'as

const initialState = {
    tasks:[
        {
            id:1,
            title: 'Learn React',
            desc: 'It is very important'
        },
        {
            id:2,
            title: 'Learn JS',
            desc: 'It is very important'
        },
        {
            id:3,
            title: 'Learn Node JS',
            desc: 'It is very important'
        }
    ],
    isOpen:false
}
const AppProvider = ({children})=>{ //Tiekejas
    const [state, dispatch] = useReducer(TodoReducer,initialState)

    const addTask = (data)=>{
        dispatch(newTask(data))
    }

    const removeTask =(id)=>{
        dispatch(deleteTask(id))
    }


    const [isOpen, setIsOpen] = useState(false);
    const openForm = ()=>{
        if(isOpen){
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }

    }
    return(
        <AppContext.Provider value={{
            ...state,
            addTask,
            removeTask,
            isOpen,
            openForm
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}