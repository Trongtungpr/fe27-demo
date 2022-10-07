import { useState } from "react";
import { localStorageKey, ROUTE, TASK_STATUS } from "../../const";
import { localStorageUtil } from "../../utils";
import "./style.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TodoListContext } from "../../context/TodoListContext";
import { clientServer } from "../../server/clientServer";

function EditForm() {
  // lay param tu url
  const { id } = useParams();
  const navigate = useNavigate();

  const { updateItem, deleteItem } = useContext(TodoListContext);

  /// state
  const [todoItem, setTodoItem] = useState({
    id: "",
    title: "",
    creator: "",
    status: "",
    description: "",
  });
  const [defaultTodoItem, setDefaultTodoItem] = useState({
    id: "",
    title: "",
    creator: "",
    status: "",
    description: "",
  });

  // componentDidMount
  useEffect(() => {
    clientServer
      .get(`todoItems/${id}`)
      .then((res) => {
        setTodoItem(res.data);
        setDefaultTodoItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // e: Synthetic Event
  const handleSubmit = (e) => {
    e.preventDefault();
    // const list = JSON.parse(get());
    // // Cap nhat du lieu cho item can chinh sua
    // const newList = list.map((item) => {
    //   if (item.id === todoItem.id) return todoItem;

    //   return item;
    // });
    // // Set xuong local storage
    // set([...newList]);
    updateItem(todoItem);
    navigate(ROUTE.all);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    // const list = JSON.parse(get());
    // // tim  vi tri
    // const currentItemIndex = list.findIndex((item) => item.id === todoItem.id);
    // // xoa khoi mang
    // list.splice(currentItemIndex, 1);
    // // Set local storage
    // set(list);

    deleteItem(todoItem.id);
    //TRo ve trang truoc
    navigate(ROUTE.all);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setTodoItem(defaultTodoItem);
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
        onChange={(e) => {
          setTodoItem({
            ...todoItem,
            status: e.target.value,
          });
        }}
      >
        <input
          checked={todoItem.status === TASK_STATUS.new}
          type="radio"
          value={TASK_STATUS.new}
          name="status"
        />
        NEW
        <input
          checked={todoItem.status === TASK_STATUS.doing}
          type="radio"
          value={TASK_STATUS.doing}
          name="status"
        />
        DOING
        <input
          checked={todoItem.status === TASK_STATUS.done}
          type="radio"
          value={TASK_STATUS.done}
          name="status"
        />
        DONE
      </div>
      <button onClick={handleSubmit} type="submit" className="submit-btn">
        Submit
      </button>
      <button onClick={handleDelete} type="submit" className="submit-btn">
        Delete
      </button>
      <button onClick={handleReset} type="submit" className="submit-btn">
        Reset
      </button>
    </form>
  );
}

export default EditForm;
