import { useState } from "react";
import { ROUTE, TASK_STATUS } from "../../const";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";
import { useContext } from "react";
import { TodoListContext } from "../../context/TodoListContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTodoItemAsync } from "../../redux/slice/todoListSlice";

function AddNewForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch

  // const { addItem } = useContext(TodoListContext);

  const [title, setTitle] = useState();
  const [creator, setCreator] = useState();
  const [status, setStatus] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      creator,
      status,
      description,
      id: uuidv4(),
    };

    dispatch(addTodoItemAsync(newTask));
    // addItem(newTask);

    // navigate(ROUTE.all);
  };

  return (
    <form className="AddNewForm">
      <h2>Add new form</h2>
      <div>
        <label>title</label>
        <input
          onClick={(e) => {}}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="title"
        />
      </div>
      <div>
        <label>creator</label>
        <input
          onChange={(e) => {
            setCreator(e.target.value);
          }}
          placeholder="creator"
        />
      </div>
      {/* <div>
        <label>status</label>
        <input
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          placeholder="status"
        />
      </div> */}
      <div>
        <label>description</label>
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="description"
        />
      </div>
      <div
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      >
        <input type="radio" value={TASK_STATUS.new} name="status" /> NEW
        <input type="radio" value={TASK_STATUS.doing} name="status" /> DOING
        <input type="radio" value={TASK_STATUS.done} name="status" /> DONE
      </div>
      <button onClick={handleSubmit} type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default AddNewForm;
