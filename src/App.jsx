import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import WarehousesPage from './pages/WarehousesPage/WarehousesPage';
import WarehousePage from './pages/WarehousePage/WarehousePage';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import AddWarehousePage from './pages/AddWarehousePage/AddWarehousePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <div className="App__pageCard">
      <Routes>
          <Route path="/warehouses" element={ < WarehousesPage /> } />
          <Route path="/warehouses/addWarehouse" element={ < AddWarehousePage /> } />
          <Route path="/warehouses/:warehouseID" element={ < WarehousePage /> } />
          <Route path="/inventory" element={ < InventoryPage /> } />
      </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
