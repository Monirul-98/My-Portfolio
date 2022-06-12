import Navbar from "./components/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
