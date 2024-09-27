import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function TodosPage() {

  const [todos, setTodos] = useState([])

  useEffect(() => {

    axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => {
        setTodos(response.data)
      })

  }, [])

  return (
    <div>
      {todos.length === 0 && <div>Loading ...</div>}

      <h1>Os meus todos:</h1>

      {todos.map(todo => <Link to={`/${todo.id}`} key={todo.id}><h2 style={{ padding: `24px` }}>{todo.title}</h2></Link>)}

    </div>
  )
}

export default TodosPage