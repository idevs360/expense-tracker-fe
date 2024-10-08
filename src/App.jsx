import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import AboutUs from "./pages/AboutUs";
import Expense from "./pages/Expense";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navbar link1="Home" link2="Expense" link3="Categories" link4="About Us"/>}
          >
            <Route index element={<Dashboard/>}/>
            <Route path="expense" element={<Expense/>} />
            <Route path="categories" element={<Categories />} />
            <Route path="about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
