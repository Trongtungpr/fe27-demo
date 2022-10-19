import { useSelector } from "react-redux";
import Pagination from "../../components/pagination/Pagination";
import { TodoItem } from "../../components/todo-item/TodoItem";
import { ITEM_PER_PAGE } from "../../const";
import { usePagination, useTodoItemList } from "./hook";
import "./TodoItemList.scss";

const TodoItemList = (props) => {
  const loading = useSelector((state) => state.todoListReducer.loading)

  const { currentData } = useTodoItemList(props.status);
  const { jumpPage, dataPerPage, currentPage, maxPage } = usePagination(
    currentData,
    ITEM_PER_PAGE
  );

  return (
    <div className="todo-item-list-container">
      {loading && <div>Loading Todo Item</div>}
      <div className="todo-item-list">
        {dataPerPage.map((item, index) => {
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
      <Pagination
        currentPage={currentPage}
        jumpPage={jumpPage}
        maxPage={maxPage}
      />
    </div>
  );
};

export default TodoItemList;
