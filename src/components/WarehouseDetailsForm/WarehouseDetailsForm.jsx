import './WarehouseDetailsForm.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';
import { useState, useEffect } from 'react';

function WarehouseDetailsForm({calledFrom, warehouseID}) {

    let api_url = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();

    const[warehouseNameInput, setWarehouseNameInput] = useState("");
    const[addressInput, setAddressInput] = useState("");
    const[cityInput, setCityInput] = useState("");
    const[countryInput, setCountryInput] = useState("");
    const[contactNameInput, setContactNameInput] = useState("");
    const[contactPositionInput, setContactPositionInput] = useState("");
    const[contactPhoneInput, setContactPhoneInput] = useState("");
    const[contactEmailInput, setContactEmailInput] = useState("");

    // const warehouseNameRef = useRef(); 

    // const [selectedWarehouse, setSelectedWarehouse] = useState([]);

    if (calledFrom === "AddWarehousePage") {
        warehouseID = null;
    }

    useEffect(() => {
    if (calledFrom === "EditWarehousePage") {
        axios.get(`${api_url}/warehouses/${warehouseID}`)
        .then((response) => {
            console.log(response.data);
            // setSelectedWarehouse(response.data);
            setWarehouseNameInput(response.data[0].warehouse_name);
            setAddressInput(response.data[0].address);
            setCityInput(response.data[0].city);
            setCountryInput(response.data[0].country);
            setContactNameInput(response.data[0].contact_name);
            setContactPositionInput(response.data[0].contact_position);
            setContactPhoneInput(response.data[0].contact_phone);
            setContactEmailInput(response.data[0].contact_email);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    },[])
    
    const handleWarehouseNameChange = (event) => {
        // console.log("Input changed");
        // console.log(event.target.value);
        setWarehouseNameInput(event.target.value);

        // console.log(warehouseNameRef.current);
    }

    const handleAddressChange = (event) => {
        // console.log("Input changed");
        // console.log(event.target.value);
        setAddressInput(event.target.value);

        // console.log(warehouseNameRef.current);
    }

    const handleCityChange = (event) => {
        // console.log("Input changed");
        // console.log(event.target.value);
        setCityInput(event.target.value);

        // console.log(warehouseNameRef.current);
    }

    const handleCountryChange = (event) => {
        // console.log("Input changed");
        // console.log(event.target.value);
        setCountryInput(event.target.value);

        // console.log(warehouseNameRef.current);
    }

    const handleContactNameChange = (event) => {
        // console.log("Input changed");
        // console.log(event.target.value);
        setContactNameInput(event.target.value);

        // console.log(warehouseNameRef.current);
    }

    const handleContactPositionChange = (event) => {
        // console.log("Input changed");
        // console.log(event.target.value);
        setContactPositionInput(event.target.value);

        // console.log(warehouseNameRef.current);
    }

    const handleContactPhoneChange = (event) => {
        // console.log("Input changed");
        // console.log(event.target.value);
        setContactPhoneInput(event.target.value);

        // console.log(warehouseNameRef.current);
    }

    const handleContactEmailChange = (event) => {
        // console.log("Input changed");
        // console.log(event.target.value);
        setContactEmailInput(event.target.value);

        // console.log(warehouseNameRef.current);
    }


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
            <input onChange={(event) => handleWarehouseNameChange(event)} placeholder="Warehouse Name" className="warehouseDetailsForm__name-input" type="text" name="name" value={calledFrom === "EditWarehousePage" ? warehouseNameInput : ""} />
            {/* selectedWarehouse[0]?. */}
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>Street Address</label>
            <br/>
            <input onChange={(event) => handleAddressChange(event)} placeholder="Street Address" className="warehouseDetailsForm__address-input" type="text" name="address" value={calledFrom === "EditWarehousePage" ? addressInput : ""}  />
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>City</label>
            <br/>
            <input onChange={(event) => handleCityChange(event)} placeholder="City" className="warehouseDetailsForm__address-input" type="text" name="city" value={calledFrom === "EditWarehousePage" ? cityInput : ""} />
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>Country</label>
            <br/>
            <input onChange={(event) => handleCountryChange(event)} placeholder="Country" className="warehouseDetailsForm__country-input" type="text" name="country" value={calledFrom === "EditWarehousePage" ? countryInput : ""} />
            </div>
        </div>

        <div className="contactDetails-container">
            <h2>Contact Details</h2>
            <div className="warehouseDetailsForm__field-container">
            <label>Contact Name</label>
            <br/>
            <input onChange={(event) => handleContactNameChange(event)} placeholder="Contact Name" className="warehouseDetailsForm__contact-name-input" type="text" name="contactName" value={calledFrom === "EditWarehousePage" ? contactNameInput : ""} />
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>Position</label>
            <br/>
            <input onChange={(event) => handleContactPositionChange(event)} placeholder="Position" className="warehouseDetailsForm__position-input" type="text" name="position" value={calledFrom === "EditWarehousePage" ? contactPositionInput : ""} />
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>Phone Number</label>
            <br/>
            <input onChange={(event) => handleContactPhoneChange(event)} placeholder="Phone Number" className="warehouseDetailsForm__phone-number-input" type="text" name="phoneNumber" value={calledFrom === "EditWarehousePage" ? contactPhoneInput : ""} />
            </div>
            <div className="warehouseDetailsForm__field-container">
            <label>Email</label>
            <br/>
            <input onChange={(event) => handleContactEmailChange(event)} placeholder="Email" className="warehouseDetailsForm__email-input" type="text" name="email" value={calledFrom === "EditWarehousePage" ? contactEmailInput : ""} />
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