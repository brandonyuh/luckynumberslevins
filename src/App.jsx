
import "./App.scss";
import InternalExternal from "./components/InternalExternal/InternalExternal";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creation from "./components/Creation/Creation";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<DataSet />} />
          <Route path="/internalorexternal" element={<InternalExternal />} />
          <Route path="/selectlocation" element={<Creation />} />
          <Route path="/selectcategory" element={<Category />} />
          <Route path="/data" element={<DataVisualization />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
