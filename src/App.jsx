import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Me from "./pages/Me";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/me" element={<Me />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
