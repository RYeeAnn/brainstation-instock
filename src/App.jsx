import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import WarehousePage from './pages/WarehousePage';
import InventoryPage from './pages/InventoryPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
          <Route path="/warehouse" element={ < WarehousePage /> } />
          <Route path="/inventory" element={ < InventoryPage /> } />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
