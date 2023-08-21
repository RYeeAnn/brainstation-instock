import PageTitleBar from "../../components/PageTitleBar/PageTitleBar";
import InventoryDetailsForm from "../../components/InventoryDetailsForm/InventoryDetailsForm";

function AddInventoryPage() {
    return (
        <div className="addInventory">
        <PageTitleBar title='Add New Inventory Item' edit={false} />
        <InventoryDetailsForm />
    </div>
    )
}

export default AddInventoryPage