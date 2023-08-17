import './TitleBar.scss'

function TitleBar() {
  return (
    <div className="titleBar">
        <h1 className="titleBar__title">Warehouses</h1>
        <input className="titleBar__search" type="text" placeholder="Search..." />
        <button className="titleBar__button">+ Add New Warehouse</button>
    </div>
  )
}

export default TitleBar