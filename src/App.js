import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import WriteItems from "./components/items/WriteItems";
import ReadItems from "./components/items/ReadItems";
import Random from "./components/Random";
import RandomTable from "./components/RandomTable";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div class="content">
        <Routes>
          <Route path="/" element={<br />} />
          <Route path="/write/items" element={<WriteItems />} />
          <Route path="/read" element={<ReadItems />} />
          <Route path="/random/:id" element={<Random />} />
          <Route path="/random/:id/:number" element={<RandomTable />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
