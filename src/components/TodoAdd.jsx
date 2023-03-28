import { useState } from "react"


export const TodoAdd = ({onNewTodo}) => {

  const [newTodo, setNewTodo] = useState({
    id: new Date().getTime(),
    description: '',
    done: false
  })

  const handleOnChange = (event) => {

    setNewTodo({...newTodo, description: event.target.value})
  }

  return (
    <form onSubmit={() => onNewTodo(newTodo)}>
      <input 
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        // value={''}
        onChange={handleOnChange}
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
        >
          Agregar
      </button>

    </form>
  )
}
