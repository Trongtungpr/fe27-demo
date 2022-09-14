import { LIST_PAGE } from "../../const";
import AddNewForm from "../add-new-form/AddNewForm";
import TodoItemList from "../todo-item-list/TodoItemList";
import "./MainContent.scss";

function MainContent(props) {
  const { page } = props;

  return (
    <div className="main-content">
      {/* Conditional rendering - Render có điều kiện */}
      {page === LIST_PAGE ? <TodoItemList /> : <AddNewForm />}
    </div>
  );
}

export default MainContent;
