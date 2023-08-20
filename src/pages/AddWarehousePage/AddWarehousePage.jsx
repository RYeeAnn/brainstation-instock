import './AddWarehousePage.scss';
import PageTitleBar from '../../components/PageTitleBar/PageTitleBar';
import WarehouseDetailsForm from '../../components/WarehouseDetailsForm/WarehouseDetailsForm';

function AddWarehousePage() {
  return (
    <div className="addWarehouse">
        <PageTitleBar title='Add New Warehouse' edit={false} />
        <WarehouseDetailsForm calledFrom="AddWarehousePage" />
    </div>
  )
}

export default AddWarehousePage