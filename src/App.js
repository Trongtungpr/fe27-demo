import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTE } from "./const";
import MainLayout from "./layout/MainLayout";
import AddNewForm from "./pages/add-new-form/AddNewForm";
import EditForm from "./pages/edit-form/EditForm";
import TodoItemList from "./pages/todo-item-list/TodoItemList";

// This is a components
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={ROUTE.all}
          element={<MainLayout content={<TodoItemList data={[]} />} />}
        />
        <Route
          path={ROUTE.new}
          element={<MainLayout content={<TodoItemList data={[]} />} />}
        />
        <Route
          path={ROUTE.doing}
          element={<MainLayout content={<TodoItemList data={[]} />} />}
        />
        <Route
          path={ROUTE.done}
          element={<MainLayout content={<TodoItemList data={[]} />} />}
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
      {/* <MainLayout /> */}
      {/* <StateDemo /> */}
      {/* {<StateDemoWithClass />} */}
    </div>
  );
}

export default App;
