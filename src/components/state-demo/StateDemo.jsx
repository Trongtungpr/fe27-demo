import { Component } from "react";
import { useState } from "react";
import "./style.scss";

const RED = 1;
const ORANGE = 2;
const GREEN = 3;

// useState() tra ve 1 mang gom 2 phan tu

// const arr = [1, 2, 3 ,4];

// const [a, b, c, d] = arr;

function destructuringDemo() {
  const object1 = { a: 1, b: 2, c: 3 };
  const object2 = { d: 4, e: 5 };
  const object12 = {
    ...object1,
    ...object2,
  };
  console.log({
    ...object1,
    c: 5,
  });

  const arr1 = [0, 1, 2];
  const arr2 = [4, 5];

  const arr12 = [...arr1, ...arr2];
  const arr11 = [...arr1, 3];
  console.log("Noi 2 mang", arr12);
  console.log("Them phan tu", arr11);
}

export class StateDemoWithClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColorState: RED,
    };
  }

  getNextColor = () => {
    const { currentColorState } = this.state;

    if (currentColorState === RED) {
      return ORANGE;
    }
    if (currentColorState === ORANGE) {
      return GREEN;
    }
    if (currentColorState === GREEN) {
      return RED;
    }
  };

  changeColor = () => {
    const { currentColorState } = this.state;

    this.setState({
      ...this.state,
      currentColorState: this.getNextColor(),
    });

    console.log(
      "🚀 ~ file: StateDemo.jsx ~ line 9 ~ StateDemo ~ currentColor",
      currentColorState
    );
  };

  render() {
    const { currentColorState } = this.state;

    return (
      <div className="StateDemo">
        <div
          className={`light red-light ${
            currentColorState === RED ? "active" : ""
          }`}
        ></div>
        <div
          className={`light orange-light ${
            currentColorState === ORANGE ? "active" : ""
          }`}
        ></div>
        <div
          className={`light green-light ${
            currentColorState === GREEN ? "active" : ""
          }`}
        ></div>
        <button onClick={this.changeColor}>Change Light Color</button>
      </div>
    );
  }
}

function StateDemo() {
  const [currentColorState, setCurrentColorState] = useState(GREEN);

  const getNextColor = () => {
    if (currentColorState === RED) {
      return ORANGE;
    }
    if (currentColorState === ORANGE) {
      return GREEN;
    }
    if (currentColorState === GREEN) {
      return RED;
    }
  };

  const changeColor = () => {
    setCurrentColorState(getNextColor());

    console.log(
      "🚀 ~ file: StateDemo.jsx ~ line 9 ~ StateDemo ~ currentColor",
      currentColorState
    );
  };

  return (
    <div className="StateDemo">
      <div
        className={`light red-light ${
          currentColorState === RED ? "active" : ""
        }`}
      ></div>
      <div
        className={`light orange-light ${
          currentColorState === ORANGE ? "active" : ""
        }`}
      ></div>
      <div
        className={`light green-light ${
          currentColorState === GREEN ? "active" : ""
        }`}
      ></div>
      <button onClick={() => changeColor()}>Change Light Color</button>
    </div>
  );
}

export default StateDemo;
