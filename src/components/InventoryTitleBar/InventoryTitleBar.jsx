import "./InventoryTitleBar.scss";

function InventoryTitleBar() {
    return (
        <div className="inventoryTitleBar">
        <h1 className="inventoryTitleBar__title">Inventory</h1>
        <input className="inventoryTitleBar__search" type="text" placeholder="Search..." />
        <button className="inventoryTitleBar__button">+ Add New Item</button>
    </div>
    );
}

export default InventoryTitleBar;