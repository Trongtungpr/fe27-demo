import { useState } from "react";
import { LIST_PAGE } from "../const";
import "./MainLayout.scss";
import { Header, SideBar } from "../components";

function MainLayout(props) {
  const { content } = props;
  const [currentPage, setCurrentPage] = useState(LIST_PAGE);

  return (
    <div className="main-layout">
      {/* Callback */}
      <Header page={currentPage} onOpenFormPage={setCurrentPage} />
      <div className="content-layout">
        <SideBar />
        <div className="main-content">{content}</div>
        {/* <MainContent page={currentPage} /> */}
      </div>
    </div>
  );
}

export default MainLayout;
