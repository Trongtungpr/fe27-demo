import { TodoItem } from "../../components/todo-item/TodoItem";
import "./TodoItemList.scss";

export const Pagination = () => {};

const TodoItemList = (props) => {
  const { data } = props;

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
          />
        );
      })}
    </div>
  );
};

export default TodoItemList;
