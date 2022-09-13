import { TodoItem } from "../todo-item/TodoItem";
import "./TodoItemList.scss";

export const Pagination = () => {};

const todoList = [
  {
    title: "task 1",
    creator: "Phuc",
    status: "New",
    description: "This is task 1  ",
  },
  {
    title: "task 2",
    creator: "Phuc",
    status: "New",
    description: "This is task 2  ",
  },
  {
    title: "task 3",
    creator: "Phuc",
    status: "New",
    description: "This is task 3  ",
  },
];

const TodoItemList = () => {
  return (
    <div className="todo-item-list">
      {todoList.map((item, index) => {
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
      {/* <TodoItem
        title={"Quét nhà"}
        creator={"Mẹ"}
        status={"New"}
        description={"Quét trước khi ăn tối"}
      />
      <TodoItem
        title={"Ăn cơm"}
        creator={"Mẹ"}
        status={"New"}
        description={"Ăn cơm lúc 12h trưa"}
      />
      <TodoItem
        title={todoList[0].title}
        creator={todoList[0].creator}
        status={todoList[0].status}
        description={todoList[0].description}
      /> */}
    </div>
  );
};

export default TodoItemList;
