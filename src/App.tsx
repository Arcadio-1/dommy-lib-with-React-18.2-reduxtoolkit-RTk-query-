import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/util/Navbar/Nav";
import NavSub from "./components/util/Navbar/Nav_sub";
import MyBooks from "./pages/MyBooks";
import Bookpage from "./pages/Book";
import NotFound from "./components/util/Not_found";

function App() {
  return (
    <>
      <Nav />
      <NavSub />
      <main className="pb-14 md:pb-2 pt-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myBooks" element={<MyBooks />} />
          <Route path="/book/:book_id" element={<Bookpage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
