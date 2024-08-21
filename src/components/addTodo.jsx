import { useState } from "react";
import Input from "./input";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
    const [data, setData] = useState("");
    const dispatch = useDispatch();

    const addToDOHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(data));
        setData("");
    };

    const onChangeHandler = (e) => {
        setData(e.target.value);
    };
    return (
        <>
            <h2>Add ToDo</h2>
            <form onSubmit={addToDOHandler}>
                <Input
                    name="Task"
                    type="text"
                    value={data}
                    onChange={onChangeHandler}
                />
                <br /> <br />
                <button>Add</button>
            </form>
        </>
    );
};

export default AddTodo;
