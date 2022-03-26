import React from 'react';
import TodoCard from '../components/TodoCard';
import {Link} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';

function Todos({todos}) {
    const {data, error, isPending} = useFetch('/posts');
    console.log(data, error, isPending);

    return (
        <div>
            <ul>
                {todos.map(({id, title, description}) => (
                    <li key={id}>
                        <TodoCard id={id} title={title} description={description} />
                    </li>
                ))
                }
            </ul>
            <Link to="/todos/create">Create ToDo</Link>
        </div>
    )
}

export default Todos;