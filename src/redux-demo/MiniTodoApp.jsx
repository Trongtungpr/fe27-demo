import AddNewForm from './components/add-new-form/AddNewForm';
import TodoList from './components/todo-list/TodoList';
import './MiniTodoApp.scss'

function MiniTodoApp() {
    return ( 
        <div className="MiniTodoApp">
            <AddNewForm />
            <TodoList />
        </div>
     );
}

export default MiniTodoApp;