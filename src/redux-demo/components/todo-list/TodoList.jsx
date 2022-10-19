import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/reducer/todoSlice";
import "./TodoList.scss";

function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer.data);

  const handleDelete = (e, index) => {
    e.preventDefault();
    dispatch(deleteTodo(index))
  };
  
  return (
    <div className="todo-list">
      {todoList.map((item, index) => {
        return (
          <div className="todo-list-content">
            <div key={`${item}${index}`} className="todo-list-item">
              {item}
            </div>
            <div
              className="todo-list-delete"
              onClick={(e) => handleDelete(e, index)}
            >
              X
            </div>
          </div>
        );
      })}
      {/* <div className="list-item">Task 1</div>
            <div className="list-item">Task 2</div>
            <div className="list-item">Task 3</div> */}
    </div>
  );
}

export default TodoList;
