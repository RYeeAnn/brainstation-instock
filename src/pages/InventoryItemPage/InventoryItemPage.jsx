import PageTitleBar from '../../components/PageTitleBar/PageTitleBar';
import './InventoryItemPage.scss';
import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InventoryEditForm from '../../components/InventoryEditForm/InventoryEditForm';

function InventoryItemPage() {
    let api_url = process.env.REACT_APP_API_URL;
    let { itemID } = useParams();

    const [itemData, setItemData] = useState({});

    useEffect(() => {
        axios.get(`${api_url}/inventories/${itemID}`).then((res) => {
            setItemData(res.data);
        });
    }, [itemID]);

    return (
        <div className="inventory-Item-Page">
            <PageTitleBar title={itemData.item_name} edit={true} />
            <div className="inventory-Item__overall-container">
                <div className="inventory-Item__description-section1">
                    <div className="inventory-Item__description-field-container">
                        <h4>ITEM DESCRIPTION:</h4>
                        <p>{itemData.description}</p>
                    </div>
                    <div className="inventory-Item__description-field-container">
                        <h4>CATEGORY:</h4>
                        <p>{itemData.category}</p>
                    </div>
                </div>
                <div className="inventory-Item__description-section2">
                    <div className="inventory-Item__status-quantity-container">
                        <div className="inventory-Item__description-field-container">
                            <h4>STATUS:</h4>
                            <p className={`inventory__status ${itemData.status === "In Stock" ? "in-stock" : "out-of-stock"}`}>
  {itemData.status}
</p>

                        </div>
                        <div className="inventory-Item__description-field-container">
                            <h4>QUANTITY:</h4>
                            <p>{itemData.quantity}</p>
                        </div>
                    </div>
                    <div className="inventory-Item__description-field-container">
                        <h4>WAREHOUSE:</h4>
                        <p>{itemData.warehouse_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InventoryItemPage;
