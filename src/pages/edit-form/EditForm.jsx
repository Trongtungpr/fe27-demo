import { useState } from "react";
import { localStorageKey, TASK_STATUS } from "../../const";
import { localStorageUtil } from "../../utils";
import "./style.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function EditForm() {
  const { set, get } = localStorageUtil(localStorageKey.todoItems, []);
  const { id } = useParams();

  const [todoItem, setTodoItem] = useState({
    id: "",
    title: "",
    creator: "",
    status: "",
    description: "",
  });

  useEffect(() => {
    const list = JSON.parse(get());
    const item = list.find((item) => item.id === id);
    console.log(item);
    setTodoItem(item);
  }, [id]);

  // e: Synthetic Event
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="EditForm">
      <h2>Edit form</h2>
      <div>
        <label>title</label>
        <input
          value={todoItem.title}
          onClick={(e) => {}}
          onChange={(e) => {
            setTodoItem({
              ...todoItem,
              title: e.target.value,
            });
          }}
          placeholder="title"
        />
      </div>
      <div>
        <label>creator</label>
        <input
          value={todoItem.creator}
          onChange={(e) => {
            setTodoItem({
              ...todoItem,
              creator: e.target.value,
            });
          }}
          placeholder="creator"
        />
      </div>
      <div>
        <label>description</label>
        <input
          value={todoItem.description}
          onChange={(e) => {
            setTodoItem({
              ...todoItem,
              description: e.target.value,
            });
          }}
          placeholder="description"
        />
      </div>
      <div
        defaultValue={todoItem.status}
        onChange={(e) => {
          setTodoItem({
            ...todoItem,
            status: e.target.value,
          });
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

export default EditForm;
