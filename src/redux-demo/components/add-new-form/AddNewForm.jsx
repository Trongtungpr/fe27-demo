import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../redux/reducer/todoSlice";
import "./AddNewForm.scss";

function AddNewForm() {
  const dispatch = useDispatch();

  const [todoItem, setTodoItem] = useState();
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(todoItem));
  };



  return (
    <form className="add-form">
      <div className="title">
        <h1>Todo List</h1>
      </div>
      <div className="content">
        <input 
        onChange={(e) => setTodoItem(e.target.value)}
        className="add-new" type="text" />
        <button 
        onClick={onSubmit}
        disabled={!todoItem || todoItem === ""}
        class="btn btn-animation">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}

export default AddNewForm;
