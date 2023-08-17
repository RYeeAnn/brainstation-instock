import './TitleBar.scss'
import { useNavigate } from 'react-router';

function TitleBar() {

  const navigate = useNavigate();

  return (
    <div className="titleBar">
        <h1 className="titleBar__title">Warehouses</h1>
        <input className="titleBar__search" type="text" placeholder="Search..." />
        <button onClick={() => navigate('../warehouses/addWarehouse')} className="titleBar__button">+ Add New Warehouse</button>
    </div>
  )
}

export default TitleBar