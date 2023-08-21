import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function InventoryPage() {
  const { inventoryID } = useParams();
  const [inventoryData, setInventoryData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/inventories/${inventoryID}`)
      .then((response) => {
        setInventoryData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching inventory details:', error);
      });
  }, [inventoryID]);

  if (!inventoryData) {
    return <p>Loading inventory details...</p>;
  }

  return (
    <div>
      <h1>Inventory Details</h1>
      <p>Item Name: {inventoryData.item_name}</p>
      <p>Description: {inventoryData.description}</p>
      <p>Category: {inventoryData.category}</p>
      <p>Status: {inventoryData.status}</p>
      <p>Quantity: {inventoryData.quantity}</p>
      <p>Warehouse: {inventoryData.warehouse_id}</p>
    </div>
  );
}

export default InventoryPage;
