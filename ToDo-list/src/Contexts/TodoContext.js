import { useContext , createContext } from "react";

export const TodoContext = createContext({
    Todos: [
        {
            id : 1,
            Todo : "Todo msg",
            completed : false
        }, 
    ],

    addTodo : ( todo) => {},
    updataTodo : (id , todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}

});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;