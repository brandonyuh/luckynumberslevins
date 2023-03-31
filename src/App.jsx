import "./App.scss";
import InternalExternal from "./components/InternalExternal/InternalExternal";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creation from "./components/Creation/Creation";
import Category from "./pages/CategoryWidgetCreation/CategoryWidgetCreation";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/create" element={<DataSet />} /> */}
          <Route path="/internalorexternal" element={<InternalExternal />} />
          <Route path="/selectlocation" element={<Creation />} />
          <Route path="/selectcategory" element={<Category />} />
          {/* <Route path="/data" element={<DataVisualization />} /> */}
        </Routes>
      </BrowserRouter>

      <h1>DELETE LATER TEMP NAVIGATION</h1>
      <ul>
        <li>
          <a href="/internalorexternal">internalorexternal</a>
        </li>
        <li>
          <a href="/location">location</a>
        </li>
        <li>
          <a href="/category">category</a>
        </li>
        <li>
          <a href="/selectlocation">select location</a>
        </li>
        <li>
          <a href="/selectcategory">select category</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
