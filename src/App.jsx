import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components/Index";
import News from "./components/newsapp/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<News />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
