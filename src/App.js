import "./App.css";
import StateDemo, {
  StateDemoWithClass,
} from "./components/state-demo/StateDemo";
import MainLayout from "./layout/MainLayout";

// This is a components
function App() {
  return (
    <div className="App">
      <MainLayout />
      {/* <StateDemo /> */}
      {/* {<StateDemoWithClass />} */}
    </div>
  );
}

export default App;
