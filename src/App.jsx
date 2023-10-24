import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./PageContaciner/Layout";
import Home from "./page/Home";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedLink, setSelectedLink] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout   selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>}>
          <Route path="/" element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
