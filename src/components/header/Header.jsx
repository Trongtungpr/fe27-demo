import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../const";
import { getNextPage } from "../../utils";

import "./Header.scss";

function Header(props) {
  const navigate = useNavigate();

  const onAddButtonClick = () => {
    navigate(ROUTE.addNew);
  };

  return (
    <div className="header">
      {/* setCurrentPage(FORM_PAGE) */}
      <button onClick={onAddButtonClick}>Create new task</button>
    </div>
  );
}

export default Header;
