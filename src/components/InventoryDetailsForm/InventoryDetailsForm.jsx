import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./InventoryDetailsForm.scss";

function InventoryDetailsForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [status, setStatus] = useState("");
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [warehouseList, setWarehouseList] = useState([]);
  
  const [itemNameError, setItemNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [warehouseError, setWarehouseError] = useState("");

  const categories = [
    'Electronics', 'Gear','Apparel', 'Accessories','Health','Gear'
  ];

  useEffect(() => {

    // Fetch inventory data using inventoryID?
    axios
      .get(`${process.env.REACT_APP_API_URL}/inventories/${params.itemID}`)
      .then((response) => {
        const inventoryData = response.data;
        console.log('inventoryData', inventoryData)
        setItemName(inventoryData.item_name);
        setDescription(inventoryData.description);
        setCategory(inventoryData.category);
        setStatus(inventoryData.status);
        setWarehouse(inventoryData.warehouse_id);

        if (inventoryData.status === "In Stock") {
          setQuantity(inventoryData.quantity);
        }
      })
      .catch((error) => {
        console.error("Error fetching inventory details:", error);
      });


      axios.get(`${process.env.REACT_APP_API_URL}/warehouses/`).then(response=>{
        setWarehouseList(response.data);
      }).catch(err => console.error(err))

  }, [params]);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let valid = true;
    
    if (itemName === "") {
      setItemNameError("Item Name is required.");
      valid = false;
    } else {
      setItemNameError("");
    }

    if (description === "") {
      setDescriptionError("Description is required.");
      valid = false;
    } else {
      setDescriptionError("");
    }

    if (category === "") {
      setCategoryError("Category is required.");
      valid = false;
    } else {
      setCategoryError("");
    }

    if (status !== "Out of Stock" && quantity === "") {
      setQuantityError("Quantity is required.");
      valid = false;
    } else {
      setQuantityError("");
    }

    if (warehouse === "") {
      setWarehouseError("Warehouse is required.");
      valid = false;
    } else {
      setWarehouseError("");
    }
    
    if (valid) {
      // For this part, should perform the backend submit logic
    }
  };

  return (
    <form className="inventoryDetailsForm" onSubmit={handleSubmit}>
      <div className="inventoryDetailsForm__overall-container">
        <div className="inventoryDetails-container">
          <h2>Item Details</h2>
          <div className="inventoryDetailsForm__field-container inventoryDetailsForm__item-container">
            <label>Item Name</label>
            <br />
            <input
              placeholder="Item Name"
              className={`inventoryDetailsForm__itemName-input ${itemNameError && 'error'}`}
              type="text"
              name="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <div className="error-message">{itemNameError}</div>
          </div>
          <div className="inventoryDetailsForm__field-container inventoryDetailsForm__item-container">
            <label>Description</label>
            <br />
            <textarea
              placeholder="Please enter a brief item description..."
              className={`inventoryDetailsForm__description-input ${descriptionError && 'error'}`}
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="error-message">{descriptionError}</div>
          </div>
          <div className="inventoryDetailsForm__field-container inventoryDetailsForm__item-container">
            <label>Category</label>
            <br />
            <select
              className={`inventoryDetailsForm__category-input ${categoryError && 'error'}`}
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
                {categories.map((categoryElement,index) => (
                    <option key={index} value={categoryElement}>{categoryElement}</option>
                ))}

            </select>
            <div className="error-message">{categoryError}</div>
          </div>
        </div>
        <div className="contactDetails-container">
          <h2>Item Availability</h2>
          <div className="inventoryDetailsForm__field-container">
            <label>Status</label>
            <div className="inventoryDetailsForm__radio-buttons">
              <input
                type="radio"
                name="status"
                value="In Stock"
                id="inStock"
                onChange={handleStatusChange}
              />
              <label htmlFor="inStock" className="radio-instock">
                In Stock
              </label>

              <input
                type="radio"
                name="status"
                value="Out of Stock"
                id="outOfStock"
                onChange={handleStatusChange}
              />
              <label htmlFor="outOfStock" className="radio-outofstock">
                Out of Stock
              </label>
            </div>
          </div>
          {status !== "Out of Stock" && (
            <div className="inventoryDetailsForm__field-container">
              <label>Quantity</label>
              <br />
              <input
                placeholder="0"
                className={`inventoryDetailsForm__phone-number-input ${quantityError && 'error'}`}
                type="text"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <div className="error-message">{quantityError}</div>
            </div>
          )}
          <div className="inventoryDetailsForm__field-container inventoryDetailsForm__item-container">
            <label>Warehouse</label>
            <br />
            <select
              className={`inventoryDetailsForm__category-input ${warehouseError && 'error'}`}
              name="warehouse"
              value={warehouse}
              onChange={(e) => setWarehouse(e.target.value)}
            >
                {warehouseList.map(warehouse=> <option key={warehouse.id} value={warehouse.warehouse_name}>{warehouse.warehouse_name}</option>)}
            </select>
            <div className="error-message">{warehouseError}</div>
          </div>
        </div>
      </div>
      <div className="inventoryDetailsForm__buttons-container">
        <button
          onClick={() => navigate("../inventory")}
          className="inventoryDetailsForm__button-cancel"
        >
          Cancel
        </button>
        <button type="submit" className="inventoryDetailsForm__button-addInventory">
          + Add Item
        </button>
      </div>
    </form>
  );
}

export default InventoryDetailsForm;
