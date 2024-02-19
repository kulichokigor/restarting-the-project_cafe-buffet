import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./css/app.css"
import Header from "./components/page_components/Header.component";
import Footer from "./components/page_components/Footer.component";
import HomePage from "./components/pages/Homepage";
import BuffetPage from "./components/pages/BuffetPage";
import FursetPage from "./components/pages/FurshetPage";
import PizzaPage from "./components/pages/PizzaPage";
import ContactPage from "./components/pages/ContactPage";
import Admin from "./admin/pages/AdminPage";
import { cafeDataAction } from "./redux/actions/actions";

function App(props) {
  //--redux api load db
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(cafeDataAction());
  },[dispatch]);

  //redux api load db--


  return (
      <BrowserRouter>
        <Header />
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/buffet" element={<BuffetPage />} />
              <Route path="/furshet" element={<FursetPage />} />
              <Route path="/pizza" element={<PizzaPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/administrator" element={<Admin />} />
            </Routes>
        <Footer />
      </BrowserRouter>
  );
}


export default App
