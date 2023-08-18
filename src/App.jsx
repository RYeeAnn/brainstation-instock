import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import WarehousesPage from './pages/WarehousesPage/WarehousesPage';
import WarehousePage from './pages/WarehousePage/WarehousePage';
import InventoriesPage from './pages/InventoriesPage/InventoriesPage';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import AddWarehousePage from './pages/AddWarehousePage/AddWarehousePage';
import InventoryItemPage from './pages/InventoryItemPage/InventoryItemPage';
import EditWarehousePage from './pages/EditWarehousePage/EditWarehousePage';
import InventoryEditForm from './components/InventoryEditForm/InventoryEditForm';
import AddInventoryPage from './pages/AddInventoryPage/AddInventoryPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <div className="App__pageCard">
      <Routes>
          <Route path="/warehouses" element={ < WarehousesPage /> } />
          <Route path="/warehouses/addWarehouse" element={ <AddWarehousePage /> } />
          <Route path="/warehouses/:warehouseID" element={ <WarehousePage /> } />
          <Route path="/warehouses/:warehouseID/edit" element={ <EditWarehousePage /> } />
          
          <Route path="/inventory" element={ < InventoriesPage /> } />
          <Route path="/inventory/addInventory" element={ <AddInventoryPage /> } />
          <Route path="/inventory/:itemID" element={ <InventoryItemPage />} />
          <Route path="/inventory/:itemID/edit" element={ <InventoryEditForm /> } />

      </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
