import { Component } from "react";

export default class DemoComp extends Component {
  constructor(props) {
    this.state = {
      state: "asjdhasjd",
    };
  }

  // Kiem soat viec render lai khi prop hoac state thay doi
  // True => re-render
  // false => khong re-render
  shouldComponentUpdate(nextProps, nextState) {
    // if(dieu kien gi do) {
    //   return false
    // }
    // return true;
  }

  // Chay ngay sau lan render thu 2 tro di (chay sau ham render)
  componentDidUpdate(prevProps, prevState, snapshot) {}

  // chay truoc khi component unmount (bien mat khoi cay DOM)
  componentWillUnmount() {
    /// Ket thuc chu ky
    /// close setInterval
    /// close setTimeout
  }

  // Chay ngay sau lan render dau tien (chay sau ham render)
  componentDidMount() {
    //
    /// DAt thai loading
    /// Lay data
    /// 1. Tu API
    /// 2. localStorage
    /// 3. doc file
    /// Khoi tao moi thu o day
    /// setInterval
    /// setTimeout
  }

  render() {
    return <div></div>;
  }
}
