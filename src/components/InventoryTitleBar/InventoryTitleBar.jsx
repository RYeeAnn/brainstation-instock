import "./InventoryTitleBar.scss";
import { Link } from "react-router-dom"; // Correct import statement

function InventoryTitleBar() {
    return (
        <div className="inventoryTitleBar">
            <h1 className="inventoryTitleBar__title">Inventory</h1>
            <input className="inventoryTitleBar__search" type="text" placeholder="Search..." />
            <Link to="/inventory/addInventory">
                <button className="inventoryTitleBar__button">+ Add New Item</button>
            </Link>
        </div>
    );
}

export default InventoryTitleBar;
