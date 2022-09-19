import { Link } from "react-router-dom";
import { SIDEBAR_ITEMS } from "../../const";
import "./SideBar.scss";

function SideBar() {
  return (
    <div className="side-bar">
      {SIDEBAR_ITEMS.map((item, index) => (
        <Link key={index} to={item.link}>
          <div>{item.label}</div>
        </Link>
      ))}
    </div>
  );
}

export default SideBar;
