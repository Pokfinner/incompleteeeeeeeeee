import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function TodoPage() {

    const { id } = useParams()
    const [todo, setTodo] = useState(null)

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => {
                setTodo(response.data)
            })

    }, [])

    return (
        <div>
            {!todo ? <div>Loading...</div>
                : (<div>

                    <div>
                        Title: {todo.title}
                    </div>
                    <div>
                        UserId: {todo.userId}
                    </div>
                    <div>
                        {todo.completed ? <div>Completed</div> : <div>Incomplete</div>}
                    </div>

                </div>)}
        </div>
    )
}

export default TodoPage