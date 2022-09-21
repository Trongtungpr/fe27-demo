import { useEffect, useState } from "react";
import { TodoItem } from "../../components/todo-item/TodoItem";
import { localStorageKey } from "../../const";
import { localStorageUtil } from "../../utils";
import "./TodoItemList.scss";

export const Pagination = () => {};

const TodoItemList = (props) => {
  const { get } = localStorageUtil(localStorageKey.todoItems, []);
  const [todoListData, setTodoListData] = useState([]);

  useEffect(() => {
    const list = JSON.parse(get());
    setTodoListData(list);
  }, []);

  return (
    <div className="todo-item-list">
      {todoListData.map((item, index) => {
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
