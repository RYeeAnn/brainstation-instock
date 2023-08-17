import "./InventoriesPage.scss" 
import InventoryTitleBar from "../../components/InventoryTitleBar/InventoryTitleBar";
import InventoryDataList from "../../components/InventoryDataList/InventoryDataList";

function InventoriesPage () {
        return (
            <div className="inventories-section">
            <InventoryTitleBar />
            <InventoryDataList />
            </div>
        );
}

export default InventoriesPage;