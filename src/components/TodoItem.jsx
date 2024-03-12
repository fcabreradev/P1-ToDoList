import {IoTrash} from 'react-icons/io5'
import { TodoUpdate } from './TodoUpdate'

export const TodoItem = ({
    todo, 
    handleDeleteTodo, 
    handleCompleteTodo, 
    handleUpdateTodo
}) => {
    return(
        <li>
            <span
                onClick={() => handleCompleteTodo(todo.id)}>
                <label className={`container-done ${todo.done ? 'active' : ''}`}></label>
            </span>
            <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />   
            <button 
                className="btn-delete" 
                onClick={() => handleDeleteTodo(todo.id)}>
                
                <IoTrash />

            </button>
        </li>
    )
}   