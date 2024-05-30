import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Products from './pages/Products';
import Location from './pages/Location';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar></CustomNavbar>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/urunlerimiz" Component={Products} />
          <Route path="/hakkimizda" Component={About} />
          <Route path="/iletisim" Component={Contact} />
          <Route path="/boac-nerede" Component={Location} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
