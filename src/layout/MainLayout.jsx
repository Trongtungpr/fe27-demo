import Header from "../components/header/Header";
import MainContent from "../components/main-content/MainContent";
import SideBar from "../components/side-bar/SideBar";
import "./MainLayout.scss";

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <div className="content-layout">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default MainLayout;
