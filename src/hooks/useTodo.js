import { useEffect, useReducer } from "react";
import { todoReducer } from "../helper/todoReducer";


export const useTodo = () => {

  const initialState = []

  const initTodos = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
  }

  const [todos, dispatch] = useReducer( todoReducer, initialState, initTodos )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])
  

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch( action );
  }

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  }

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  }




  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}