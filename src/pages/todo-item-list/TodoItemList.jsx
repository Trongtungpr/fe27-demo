import { useContext } from "react";
import { TodoItem } from "../../components/todo-item/TodoItem";
import { TodoListContext } from "../../context/TodoListContext";
import "./TodoItemList.scss";

export const Pagination = () => {};

const TodoItemList = () => {
  const { data } = useContext(TodoListContext);

  return (
    <div className="todo-item-list">
      {data.map((item, index) => {
        return (
          <TodoItem
            key={index}
            title={item.title}
            creator={item.creator}
            status={item.status}
            description={item.description}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default TodoItemList;
