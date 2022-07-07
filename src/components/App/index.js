import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
