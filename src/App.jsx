import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehousePage from './pages/WarehousePage/WarehousePage';
import InventoryPage from './pages/InventoryPage/InventoryPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/warehouse" element={ < WarehousePage /> } />
        <Route path="/inventory" element={ < InventoryPage /> } />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
