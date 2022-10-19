import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { localStorageKey, ROUTE, TASK_STATUS } from "./const";
import { TodoListContext } from "./context/TodoListContext";
import MainLayout from "./layout/MainLayout";
import AddNewForm from "./pages/add-new-form/AddNewForm";
import EditForm from "./pages/edit-form/EditForm";
import TodoItemList from "./pages/todo-item-list/TodoItemList";
import { clientServer } from "./server/clientServer";
import { observer } from "mobx-react";
import { todoStore } from "./mobx-store/TodoItemStore";
import { useDispatch } from "react-redux";
import { fetchTodoList } from "./redux/slice/todoListSlice";


// This is a components
const App = observer(({ store}) => {
  //tạo ra ham dùng để đẩy action lên redux-store
  const dispatch = useDispatch();
  // const [todoList, setTodoList] = useState([]);

  // console.log(todoListStore.todoItemsCount);
  // console.log(todoListStore.getTodoItems());

  const setTodoList = (todoList) => {
    todoStore.setTodoItems(todoList);
  };

  const todoList = todoStore.getTodoItems();

  // component
  // useEffect(() => {
  //   store.fetchTodoItem();
  // }, []);
  useEffect(() => {
    dispatch(fetchTodoList());
  });

  const fetchTodoItem = () => {
    clientServer
      .get("todoItems")
      .then((res) => {
        setTodoList((res.data ?? []).reverse());
      })
      .catch((e) => {
        console.log("error:", e);
      });
  };

  // const handleAddItem = (newTask) => {
  //   clientServer
  //     .post("todoItems", newTask)
  //     .then((res) => {
  //       console.log(res);
  //       store.fetchTodoItem();
  //     })
  //     .catch((err) => {
  //       console.log("error:", err);
  //     });
  // };
  // const handleUpdateItem = (updatedTask) => {
  //   clientServer
  //     .patch(`todoItems/${updatedTask.id}`, updatedTask)
  //     .then((res) => {
  //       console.log(res);
  //       store.fetchTodoItem();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // const handleDeleteItem = (id) => {
  //   clientServer
  //     .delete(`todoItems/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       fetchTodoItem();
  //     })
  //     .catch((err) => {
  //       console.log("error: ", err);
  //     });
  // };

  return (
    <TodoListContext.Provider
      value={{
        data: todoList,
        // addItem: handleAddItem,
        // updateItem: handleUpdateItem,
        // deleteItem: handleDeleteItem,
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
            element={
              <MainLayout content={<TodoItemList status={TASK_STATUS.new} />} />
            }
          />
          <Route
            path={ROUTE.doing}
            element={
              <MainLayout
                content={<TodoItemList status={TASK_STATUS.doing} />}
              />
            }
          />
          <Route
            path={ROUTE.done}
            element={
              <MainLayout
                content={<TodoItemList status={TASK_STATUS.done} />}
              />
            }
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
});

export default App;
