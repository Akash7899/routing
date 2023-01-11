import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./components/404";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Service from "./components/Service";
import MainHeader from "./layout/MainHeader";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Service" element={<Service />}></Route>
            <Route path="/Blog" element={<Blog />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
