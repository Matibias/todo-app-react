import { useReducer } from "react"
import { TodoAdd, TodoList } from "./components"
import { todoReducer } from "./helper/todoReducer"

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del poder',
    done: false,
  },
]


export const TodoApp = () => {

  const [todos, dispatch] = useReducer( todoReducer, initialState )

  const handleNewTodo = ( todo ) => {
    console.log(todo)
  }

  return (
    <>
      <h1>TodoApp 10, <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">

          <TodoList todos={todos} />

        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          
          <TodoAdd onNewTodo={handleNewTodo} />

        </div>
      </div>


    </>
  )
}
