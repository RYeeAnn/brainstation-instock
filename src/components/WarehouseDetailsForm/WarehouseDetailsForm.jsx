import './WarehouseDetailsForm.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';


function WarehouseDetailsForm() {

    let api_url = process.env.REACT_APP_API_URL;
    const navigate = useNavigate()

    const validatePhoneNumber = (number) => {
        const isValidPhoneNumber = validator.isMobilePhone(number)
        return (isValidPhoneNumber);
    }

    const validateEmail = (email) => {
        let validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return email.match(validEmailRegex);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!event.target.name.value) {
            alert('Error: Warehouse Name Required');
            return
        }
        if (!event.target.address.value) {
            alert('Error: Address Required');
            return
        }
        if (!event.target.city.value) {
            alert('Error: City Required');
            return
        }
        if (!event.target.country.value) {
            alert('Error: Country Required');
            return
        }

        if (!event.target.contactName.value) {
            alert('Error: Contact Name Required');
            return
        }
        if (!event.target.position.value) {
            alert('Error: Position Required');
            return
        }
        if (!event.target.phoneNumber.value) {
            alert('Error: Phone Number Required');
            return
        }
        if (!validatePhoneNumber(event.target.phoneNumber.value)) {
            alert('Error: Please Enter a Valid Phone Number');
            return
        }
        if (!event.target.email.value) {
            alert('Error: Email Required');
            return
        }

        if (!validateEmail(event.target.email.value)) {
            alert('Error: Please Enter a Valid Email Address');
            return
        }

        let responseObject = {
            warehouse_name: event.target.name.value,
            address: event.target.address.value,
            city: event.target.city.value,
            country: event.target.country.value,
            contact_name: event.target.contactName.value,
            contact_position: event.target.position.value,
            contact_phone: event.target.phoneNumber.value,
            contact_email: event.target.email.value


        }

        axios.post(`${api_url}/warehouses`, responseObject).then((res) => {
            alert(res.data.message);
            navigate('../warehouses')
        }).catch((err) => {
            console.log(err);
        })
    }

  return (
    <form onSubmit={handleSubmit} className="warehouseDetailsForm">
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
            <input placeholder="Contact Name" className="warehouseDetailsForm__contact-name-input" type="text" name="contactName" />
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>Position</label>
            <br/>
            <input placeholder="Position" className="warehouseDetailsForm__position-input" type="text" name="position" />
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>Phone Number</label>
            <br/>
            <input placeholder="Phone Number" className="warehouseDetailsForm__phone-number-input" type="text" name="phoneNumber" />
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
            <button type="submit" className="warehouseDetailsForm__button-addWarehouse">+ Add Warehouse</button>
        </div>


    </form>
  )
}

export default WarehouseDetailsForm