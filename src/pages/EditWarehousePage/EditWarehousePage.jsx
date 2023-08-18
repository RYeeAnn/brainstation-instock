import "./EditWarehousePage.scss";
import PageTitleBar from '../../components/PageTitleBar/PageTitleBar';
import WarehouseDetailsForm from '../../components/WarehouseDetailsForm/WarehouseDetailsForm';
import ButtonAddWarehouse from '../../components/ButtonAddWarehouse/ButtonAddWarehouse';
import ButtonCancel from '../../components/ButtonCancel/ButtonCancel';


function EditWarehousePage(props) {
    return (
        <div className="editWarehouse">
        <PageTitleBar title='Edit Warehouse' edit={false} />
        <WarehouseDetailsForm calledFrom="EditWarehousePage" />
    </div>
    );
}

export default EditWarehousePage;