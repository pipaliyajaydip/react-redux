import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const DisplayTodos = () => {
    const dispatch = useDispatch();

    const allTodos = useSelector((state) => state.todos);

    console.log(allTodos);

    const handleDelete = (id) => {
        dispatch(removeTodo(id));
    };

    return (
        <>
            <div>Tasks</div>
            {allTodos.map((todo) => (
                <li key={todo.id}>
                    {todo.task}
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </li>
            ))}
        </>
    );
};

export default DisplayTodos;
