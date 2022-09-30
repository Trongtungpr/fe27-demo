import { useNavigate, useSearchParams } from "react-router-dom";
import { ROUTE } from "../../const";
import { getNextPage } from "../../utils";

import "./Header.scss";

function Header(props) {
  const navigate = useNavigate();
  let [searchParamsGetter, setSearchParams] = useSearchParams();

  const onAddButtonClick = () => {
    navigate(ROUTE.addNew);
  };

  return (
    <div className="header">
      {/* setCurrentPage(FORM_PAGE) */}
      <button onClick={onAddButtonClick}>Create new task</button>
      <input onChange={(e) => setSearchParams({ search: e.target.value })} />
    </div>
  );
}

export default Header;
