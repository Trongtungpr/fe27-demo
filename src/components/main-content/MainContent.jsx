import { useState } from "react";
import { LIST_PAGE } from "../../const";
import AddNewForm from "../../pages/add-new-form/AddNewForm";
import TodoItemList from "../../pages/todo-item-list/TodoItemList";
import "./MainContent.scss";

function MainContent(props) {
  const [todoListData, setTodoListData] = useState([]);

  const { page } = props;

  const handleFormSubmit = (newTask) => {
    setTodoListData([newTask, ...todoListData]);
  };

  return (
    <div className="main-content">
      {/* Conditional rendering - Render có điều kiện */}
      {page === LIST_PAGE ? (
        <TodoItemList data={todoListData} />
      ) : (
        <AddNewForm handleFormSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default MainContent;
