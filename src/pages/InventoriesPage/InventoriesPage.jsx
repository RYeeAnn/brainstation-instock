import "./InventoriesPage.scss" 
import InventoryTitleBar from "../../components/InventoryTitleBar/InventoryTitleBar";
import InventoryDataList from "../../components/InventoryDataList/InventoryDataList";
import PageTitleBarSearch from "../../components/PageTitleBarSearch/PageTitleBarSearch";

function InventoriesPage () {
        return (
            <div className="inventories-section">
            <PageTitleBarSearch title="Inventory" buttonText="+ Add New Item" pageName="addInventory" />
            <InventoryDataList />
            </div>
        );
}

export default InventoriesPage;