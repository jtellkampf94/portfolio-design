import { BrowserRouter, Route, Routes } from "react-router-dom";
import Heading from "../Heading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Heading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
