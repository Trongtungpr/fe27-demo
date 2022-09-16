import { useState } from "react";
import "./style.scss";

function AddNewForm() {
  const [title, setTitle] = useState();
  const [creator, setCreator] = useState();
  const [status, setStatus] = useState();
  const [description, setDescription] = useState();

  return (
    <form className="AddNewForm">
      <div>
        <label>title</label>
        <input placeholder="title" />
      </div>
      <div>
        <label>creator</label>
        <input placeholder="creator" />
      </div>
      <div>
        <label>status</label>
        <input placeholder="status" />
      </div>
      <div>
        <label>description</label>
        <input placeholder="description" />
      </div>
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default AddNewForm;
