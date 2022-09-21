import { useState } from "react";
import { localStorageKey, TASK_STATUS } from "../../const";
import { localStorageUtil } from "../../utils";
import "./style.scss";

function EditForm(props) {
  const { set, get } = localStorageUtil(localStorageKey.todoItems, []);

  const [title, setTitle] = useState();
  const [creator, setCreator] = useState();
  const [status, setStatus] = useState();
  const [description, setDescription] = useState();

  // e: Synthetic Event
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      creator,
      status,
      description,
    };
    const oldList = JSON.parse(get());
    set([newTask, ...oldList]);
  };

  return (
    <form className="EditForm">
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

export default EditForm;
