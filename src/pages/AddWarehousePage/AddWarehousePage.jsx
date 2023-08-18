import './AddWarehousePage.scss';
import PageTitleBar from '../../components/PageTitleBar/PageTitleBar';
import WarehouseDetailsForm from '../../components/WarehouseDetailsForm/WarehouseDetailsForm';
import ButtonAddWarehouse from '../../components/ButtonAddWarehouse/ButtonAddWarehouse';
import ButtonCancel from '../../components/ButtonCancel/ButtonCancel';

function AddWarehousePage() {
  return (
    <div className="addWarehouse">
        <PageTitleBar title='Add New Warehouse' edit={false} />
        <WarehouseDetailsForm />
    </div>
  )
}

export default AddWarehousePage