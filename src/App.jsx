import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InternalExternal from "./Components/InternalExternal/InternalExternal";
import Creation from "./Components/Creation/Creation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <InternalExternal />
        {/* <Creation /> */}
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
  //   <div className="App">
  //     <p>Hello Lucky Number Slevins!!</p>
  //   </div>
}

export default App;
