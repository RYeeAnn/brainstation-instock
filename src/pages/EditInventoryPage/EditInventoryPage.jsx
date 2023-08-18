import PageTitleBar from "../../components/PageTitleBar/PageTitleBar"
import InventoryEditForm from "../../components/InventoryEditForm/InventoryEditForm"

function EditInventoryPage () {
    return (
        <div className="addInventory">
            <PageTitleBar title='Edit Inventory Item' edit={false} />
            <InventoryEditForm />
        </div>
    )
}

export default EditInventoryPage