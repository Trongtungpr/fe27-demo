import { getNextPage } from "../../utils";

import "./Header.scss";

function Header(props) {
  const { onOpenFormPage, page } = props;

  const onAddButtonClick = () => {
    const nextPage = getNextPage(page);
    onOpenFormPage(nextPage);
  };

  return (
    <div className="header">
      {/* setCurrentPage(FORM_PAGE) */}
      <button onClick={onAddButtonClick}>Create new task</button>
    </div>
  );
}

export default Header;
