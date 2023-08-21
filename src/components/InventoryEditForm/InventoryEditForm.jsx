import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import "./InventoryEditForm.scss";
import PageTitleBar from "../PageTitleBar/PageTitleBar";

function InventoryEditForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [status, setStatus] = useState("");
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [warehouseList, setWarehouseList] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [quantityError, setQuantityError] = useState(""); // Added for quantity error

  const [itemNameError, setItemNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [warehouseError, setWarehouseError] = useState("");

  const categories = [
    'Electronics', 'Gear', 'Apparel', 'Accessories', 'Health', 'Gear'
  ];

  let api_url = process.env.REACT_APP_API_URL;

  let { itemID } = useParams();
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/inventories/${params.itemID}`)
      .then((response) => {
        const inventoryData = response.data;
        setItemName(inventoryData.item_name);
        setDescription(inventoryData.description);
        setCategory(inventoryData.category);
        setStatus(inventoryData.status);
        setWarehouse(inventoryData.warehouse_id);
        setQuantity(inventoryData.quantity);
      })
      .catch((error) => {
        console.error("Error fetching inventory details:", error);
      });

    axios.get(`${process.env.REACT_APP_API_URL}/warehouses/`)
      .then(response => {
        setWarehouseList(response.data);
      })
      .catch(err => console.error(err));
  }, [params]);

  useEffect(() => {
    axios.get(`${api_url}/inventories/${itemID}`)
      .then((res) => {
        setItemData(res.data);
      });
  }, [itemID]);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    if (event.target.value === "Out of Stock") {
      setQuantity("");
      setQuantityError(""); // Clear quantity error when status changes
    }
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
      let updated_inventoryItem = {
        "warehouse_id": event.target.warehouse.value,
        "item_name": event.target.itemName.value,
        "description": event.target.description.value,
        "category": event.target.category.value,
        "status": event.target.status.value,
        "quantity": event.target.quantity.value
      };

      axios.put(`${process.env.REACT_APP_API_URL}/inventories/${params.itemID}`, updated_inventoryItem)
        .then(res => {
          alert("Successfully edited Inventory Item!");
          navigate('../inventory');
        })
        .catch(error => {
          console.error("Error editing inventory item:", error);
        });
    }
  };

  return (
    <form className="inventoryDetailsForm" onSubmit={handleSubmit}>
      <PageTitleBar title={itemData.item_name} edit={false} />
      <div className="inventoryDetailsForm__overall-container">
        <div className="inventoryDetails-container">
          <h2>Item Details</h2>
          <div className="inventoryDetailsForm__field-container inventoryDetailsForm__item-container">
            <label>Item Name</label>
            <br />
            <input
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
              {categories.map((categoryElement, index) => (
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
                checked={status === 'In Stock'}
              />
              <label className="radio-instock">
                In Stock
              </label>

              <input
                type="radio"
                name="status"
                value="Out of Stock"
                id="outOfStock"
                onChange={handleStatusChange}
                checked={status === 'Out of Stock'}
              />
              <label className="radio-outofstock">
                Out of Stock
              </label>
            </div>
          </div>
          {status === "In Stock" && (
            <div className="inventoryDetailsForm__field-container inventoryDetailsForm__item-container">
              <label>Quantity</label>
              <br />
              <input
                className={`inventoryDetailsForm__phone-number-input ${quantityError && "error"}`}
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
              {warehouseList.map(warehouse => (
                <option key={warehouse.id} value={warehouse.id}>{warehouse.warehouse_name}</option>
              ))}
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
          Edit Item
        </button>
      </div>
    </form>
  );
}


export default InventoryEditForm;
