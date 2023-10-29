import { Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home";
import  Contributions  from "./pages/contributions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contributions" element={<Contributions />} />
      </Routes>
    </>
  );
}

export default App;
