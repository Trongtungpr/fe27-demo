import { Component } from "react";
import "./TodoItem.scss";

// Functional Component
// Props la `object` chứa các thuộc tính của component
export const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <p className="todo-item-title">Title: {props.title}</p>
      <p className="todo-item-creator">Creator: {props.creator}</p>
      <p className="todo-item-status">Status: {props.status}</p>
      <hr className="todo-item-divider" />
      <p className="todo-item-description">
        <b>Description:</b> {props.description}
      </p>
    </div>
  );
};

export class TodoItemClass extends Component {
  render() {
    return (
      <div className="todo-item">
        <p className="todo-item-title">Title: {this.props.title}</p>
        <p className="todo-item-creator">Creator: {this.props.creator}</p>
        <p className="todo-item-status">Status: {this.props.status}</p>
        <hr className="todo-item-divider" />
        <p className="todo-item-description">
          <b>Description:</b> {this.props.description}
        </p>
      </div>
    );
  }
}

// export default TodoItem;

class Person {
  // thuộc tính: tên, tuổi, ...
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  run() {
    console.log(`${this.name} đang chạy`);
  }

  sleep() {
    console.log(`${this.name} đang ngủ`);
  }

  hello() {
    console.log(`${this.name} xin chào`);
  }
}

const phuc = new Person("Phuc", 18);
const dat = new Person("Dat", 20);
dat.hello();
dat.run();
dat.sleep();
