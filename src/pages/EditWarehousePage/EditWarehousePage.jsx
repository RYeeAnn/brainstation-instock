import "./EditWarehousePage.scss";
import PageTitleBar from '../../components/PageTitleBar/PageTitleBar';
import WarehouseDetailsForm from '../../components/WarehouseDetailsForm/WarehouseDetailsForm';
import { useParams } from "react-router-dom";


function EditWarehousePage() {

    const {warehouseID} = useParams();
    // console.log(warehouseID)
    // console.log(props);

    return (
        <div className="editWarehouse">
        <PageTitleBar title='Edit Warehouse' edit={false} />
        <WarehouseDetailsForm calledFrom="EditWarehousePage" warehouseID={warehouseID} />
    </div>
    );
}

export default EditWarehousePage;