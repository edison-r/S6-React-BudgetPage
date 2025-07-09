import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Main from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
