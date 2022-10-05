import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { localStorageKey, ROUTE } from "./const";
import { TodoListContext } from "./context/TodoListContext";
import MainLayout from "./layout/MainLayout";
import AddNewForm from "./pages/add-new-form/AddNewForm";
import EditForm from "./pages/edit-form/EditForm";
import TodoItemList from "./pages/todo-item-list/TodoItemList";
import { localStorageUtil } from "./utils";

// This is a components
function App() {
  const { get, set } = localStorageUtil(localStorageKey.todoItems, []);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const listFromLocalStorage = JSON.parse(get());
    setTodoList(listFromLocalStorage);
  }, []);

  const handleAddItem = (newTask) => {
    const oldList = JSON.parse(get());
    const newList = [newTask, ...oldList];
    setTodoList(newList);
    set(newList);
  };
  const handleUpdateItem = (updatedTask) => {
    const oldList = JSON.parse(get());
    const newList = oldList.map((item) => {
      if (updatedTask.id === item.id) return updatedTask;

      return item;
    });
    setTodoList([...newList]);
    set([...newList]);
  };
  const handleDeleteItem = (id) => {
    const oldList = JSON.parse(get());
    const newList = oldList.filter((item) => item.id !== id);
    setTodoList([...newList]);
    set([...newList]);
  };

  return (
    <TodoListContext.Provider
      value={{
        data: todoList,
        addItem: handleAddItem,
        updateItem: handleUpdateItem,
        deleteItem: handleDeleteItem,
      }}
    >
      <div className="App">
        <Routes>
          <Route
            path={ROUTE.all}
            element={<MainLayout content={<TodoItemList />} />}
          />
          <Route
            path={ROUTE.new}
            element={<MainLayout content={<TodoItemList />} />}
          />
          <Route
            path={ROUTE.doing}
            element={<MainLayout content={<TodoItemList />} />}
          />
          <Route
            path={ROUTE.done}
            element={<MainLayout content={<TodoItemList />} />}
          />
          <Route
            path={ROUTE.addNew}
            element={<MainLayout content={<AddNewForm />} />}
          />
          <Route
            path={`${ROUTE.editForm}/:id`}
            element={<MainLayout content={<EditForm />} />}
          />
        </Routes>
      </div>
    </TodoListContext.Provider>
  );
}

export default App;
