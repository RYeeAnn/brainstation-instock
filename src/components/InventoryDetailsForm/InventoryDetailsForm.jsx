import { useNavigate } from "react-router-dom";
import "./InventoryDetailsForm.scss";

function InventoryDetailsForm() {
  const navigate = useNavigate();

  return (
    <form className="inventoryDetailsForm">
      <div className="inventoryDetailsForm__overall-container">
        <div className="inventoryDetails-container">
          <h2>Item Details</h2>
          <div className="inventoryDetailsForm__field-container inventoryDetailsForm__item-container">
            <label>Item Name</label>
            <br />
            <input
              placeholder="Item Name"
              className="inventoryDetailsForm__itemName-input"
              type="text"
              name="itemName"
            />
          </div>
          <div className="inventoryDetailsForm__field-container inventoryDetailsForm__item-container">
            <label>Description</label>
            <br />
            <textarea
              placeholder="Please enter a brief item description..."
              type="text"
              name="description"
            />
          </div>
          <div className="inventoryDetailsForm__field-container inventoryDetailsForm__item-container">
            <label>Category</label>
            <br />
            <select
              className="inventoryDetailsForm__category-input"
              name="category"
            >
              <option value="">Please Select</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
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
              />
              <label htmlFor="inStock" className="radio-instock">
                In Stock
              </label>

              <input
                type="radio"
                name="status"
                value="Out of Stock"
                id="outOfStock"
              />
              <label htmlFor="outOfStock" className="radio-outofstock">
                Out of Stock
              </label>
            </div>
          </div>
          <div className="inventoryDetailsForm__field-container">
            <label>Quantity</label>
            <br />
            <input
              placeholder="0"
              type="text"
              name="quantity"
            />
          </div>
          <div className="inventoryDetailsForm__field-container">
            <label>Warehouse</label>
            <br />
            <select
              className="inventoryDetailsForm__warehouse-input"
              name="warehouse"
            >
              <option value="">Please Select</option>
              <option value="warehouse1">Warehouse 1</option>
              <option value="warehouse2">Warehouse 2</option>
              <option value="warehouse3">Warehouse 3</option>
            </select>
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
        <button className="inventoryDetailsForm__button-addInventory">
          + Add Item
        </button>
      </div>
    </form>
  );
}

export default InventoryDetailsForm;
