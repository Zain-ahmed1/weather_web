import { BrowserRouter, Route, Routes } from "react-router-dom";
import Handle_data from "./components/Data_handle/Handle_data";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Handle_data />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
