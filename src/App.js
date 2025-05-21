import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import HomePage from './pages/Home.js';

function App() {
 
  return (
    <BrowserRouter>
     <Routes> 
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
    </BrowserRouter>
    // <>
    //  <Header/>
    //  <Main/>
    //  <Footer/>
    // </>
  );
}

export default App;
