import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Products from './pages/Products';
import Icecream from './pages/Icecream';
import Cones from './pages/Cones';
import Yogurts from './pages/Yogurts';
import Drinks from './pages/Drinks';
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
          <Route path="/urunlerimiz/dondurmalarimiz" Component={Icecream} />
          <Route path="/urunlerimiz/yogurtlarimiz" Component={Yogurts} />
          <Route path="/urunlerimiz/külahlarimiz" Component={Cones} />
          <Route path="/urunlerimiz/içeceklerimiz" Component={Drinks} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
