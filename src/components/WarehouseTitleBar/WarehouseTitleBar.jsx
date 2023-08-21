import './WarehouseTitleBar.scss'

function WarehouseTitleBar() {
  return (
    <div className="warehouseTitleBar">
        <h1 className="warehouseTitleBar__title">Warehouses</h1>
        <input className="warehouseTitleBar__search" type="text" placeholder="Search..." />
        <button className="warehouseTitleBar__button">+ Add New Warehouse</button>
    </div>
  )
}

export default WarehouseTitleBar