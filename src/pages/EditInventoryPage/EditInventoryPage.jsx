import PageTitleBar from "../../components/PageTitleBar/PageTitleBar"
import InventoryEditForm from "../../components/InventoryEditForm/InventoryEditForm"
import { useParams } from "react-router-dom"

function EditInventoryPage () {
    const { inventoryID } = useParams();
    return (
        <div className="addInventory">
            <PageTitleBar title='Edit Inventory Item' edit={false} />
            <InventoryEditForm inventoryID={inventoryID} />
        </div>
    )
}

export default EditInventoryPage