import PageTitleBar from '../../components/PageTitleBar/PageTitleBar';
import './InventoryItemPage.scss';
import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';

function InventoryItemPage() {

    let api_url = process.env.REACT_APP_API_URL;
    let { itemID } = useParams();

    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemCategory, setItemCategory] = useState("");
    const [itemStatus, setItemStatus] = useState("");
    const [itemQuantity, setItemQuantity] = useState(0);
    const [Warehouse, setWarehouse] = useState("");


    useEffect(() => {
        axios.get(`${api_url}/inventories/${itemID}`).then((res) => {
            setItemName(res.data.item_name);
            setItemDescription(res.data.description);
            setItemCategory(res.data.category);
            setItemStatus(res.data.status);
            setItemQuantity(res.data.quantity);
            setWarehouse(res.data.warehouse_name);
        });
    }, []);
    

  return (
    <div className="inventory-Item-Page">
        <PageTitleBar title={itemName} edit={true} />
        <div className="inventory-Item__overall-container">

        
        <div className="inventory-Item__description-section1">
        <div className="inventory-Item__description-field-container">
        <h4>ITEM DESCRIPTION:</h4>
        <p>{itemDescription}</p>
        </div>
        <div className="inventory-Item__description-field-container">
        <h4>CATEGORY:</h4>
        <p>{itemCategory}</p>
        </div>
        </div>
        <div className="inventory-Item__description-section2">
        <div className="inventory-Item__status-quantity-container">
        <div className="inventory-Item__description-field-container">
        <h4>STATUS:</h4>
        <p>{itemStatus}</p>
        </div>
        <div className="inventory-Item__description-field-container">
        <h4>QUANTITY:</h4>
        <p>{itemQuantity}</p>
        </div>
        </div>
        <div className="inventory-Item__description-field-container">
        <h4>WAREHOUSE:</h4>
        <p>{Warehouse}</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default InventoryItemPage