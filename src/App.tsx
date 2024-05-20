import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar></CustomNavbar>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/urunlerimiz" Component={Home} />
          <Route path="/iletisim" Component={Contact} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
