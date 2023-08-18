import './WarehouseDetailsForm.scss'
import { useNavigate } from 'react-router-dom';

function WarehouseDetailsForm() {

    const navigate = useNavigate()

  return (
    <form className="warehouseDetailsForm">
        <div className="warehouseDetailsForm__overall-container">
        <div className="warehouseDetails-container">
            <h2>Warehouse Details</h2>
            <div className="warehouseDetailsForm__field-container">
            <label>Warehouse Name</label>
            <br/>
            <input placeholder="Warehouse Name" className="warehouseDetailsForm__name-input" type="text" name="name" />
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>Street Address</label>
            <br/>
            <input placeholder="Street Address" className="warehouseDetailsForm__address-input" type="text" name="address" />
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>City</label>
            <br/>
            <input placeholder="City" className="warehouseDetailsForm__address-input" type="text" name="city" />
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>Country</label>
            <br/>
            <input placeholder="Country" className="warehouseDetailsForm__country-input" type="text" name="country" />
            </div>
        </div>

        <div className="contactDetails-container">
            <h2>Contact Details</h2>
            <div className="warehouseDetailsForm__field-container">
            <label>Contact Name</label>
            <br/>
            <input placeholder="Contact Name" className="warehouseDetailsForm__contact-name-input" type="text" name="contact-name" />
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>Position</label>
            <br/>
            <input placeholder="Position" className="warehouseDetailsForm__position-input" type="text" name="position" />
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>Phone Number</label>
            <br/>
            <input placeholder="Phone Number" className="warehouseDetailsForm__phone-number-input" type="text" name="phone-number" />
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>Email</label>
            <br/>
            <input placeholder="Email" className="warehouseDetailsForm__email-input" type="text" name="email" />
            </div>
            </div>
            
        </div>
        <div className="warehouseDetailsForm__buttons-container">
            <button onClick={() => navigate('../warehouses')} className="warehouseDetailsForm__button-cancel">Cancel</button>
            <button className="warehouseDetailsForm__button-addWarehouse">+ Add Warehouse</button>
        </div>


    </form>
  )
}

export default WarehouseDetailsForm