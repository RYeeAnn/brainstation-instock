import './AddWarehousePage.scss';
import TitleBar2 from '../../components/TitleBar2/TitleBar2';
import WarehouseDetailsForm from '../../components/WarehouseDetailsForm/WarehouseDetailsForm';
import ButtonAddWarehouse from '../../components/ButtonAddWarehouse/ButtonAddWarehouse';
import ButtonCancel from '../../components/ButtonCancel/ButtonCancel';

function AddWarehousePage() {
  return (
    <div className="addWarehouse">
        <TitleBar2 />
        <WarehouseDetailsForm />
    </div>
  )
}

export default AddWarehousePage