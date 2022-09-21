import { Component } from "react";
import { useEffect, useState } from "react";
import { TodoItem } from "../../components/todo-item/TodoItem";
import { localStorageKey } from "../../const";
import { localStorageUtil } from "../../utils";

export const Pagination = () => {};

const TodoItemList = (props) => {
  const { get } = localStorageUtil(localStorageKey.todoItems, []);
  const [todoListData, setTodoListData] = useState([]);

  // Callback o tham so thu nhat se duoc goi khi state/prop thay doi
  useEffect(() => {});

  /// Life cycle : hoat dong tuong tu componentDidMount
  useEffect(() => {
    const list = JSON.parse(get());
    setTodoListData(list);

    // componentWillUnmount: la ham tra ve trong 'componentWillUnmount'
    return () => {
      // Dung 1 subscription
      // Dung theo doi 1 socket
      // Dung setInterval
      // Dung setTimeout
    };
  }, []);

  /// componentDidUpdate : Khi bat ky element nao trong arr dependency thay doi thi callback duoc goi
  /// Thuong dung de bien doi du lieu dau vao
  useEffect(() => {
    const newList = props.externalListData.map((item) => ({
      ...item,
      title: item.name,
    }));

    setTodoListData(newList);
  }, [props.externalListData, todoListData]);

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
          />
        );
      })}
    </div>
  );
};

export default TodoItemList;
