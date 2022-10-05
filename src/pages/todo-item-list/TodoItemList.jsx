import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { TodoItem } from "../../components/todo-item/TodoItem";
import { TodoListContext } from "../../context/TodoListContext";
import "./TodoItemList.scss";

export const Pagination = () => {};

// Custom hook
const useTodoItemList = (status) => {
  // `use` prefix
  const { data } = useContext(TodoListContext);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    // Cho truong hop all
    if (!status) {
      setCurrentData(data);
      return;
    }

    // filter theo status cua moi trang
    const filterList = data.filter((item) => item?.status === status);
    setCurrentData(filterList);
  }, [data, status]);

  return {
    currentData,
  };
};

const TodoItemList = (props) => {
  const { currentData } = useTodoItemList(props.status);

  return (
    <div className="todo-item-list">
      {currentData.map((item, index) => {
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
