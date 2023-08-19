import './WarehousePage.scss';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function WarehousePage() {

  const [inventoriesForWarehouse, setinventoriesForWarehouse] = useState([]);

  const { warehouseID } = useParams();

  const api_URL = `${process.env.REACT_APP_API_URL}`
  axios.get(`${api_URL}/warehouses/${warehouseID}/inventories`)
    .then((response) => {
      console.log(response.data);
      setinventoriesForWarehouse(response.data);
    })
    .catch((error) => {
      console.timeLog(error)
    });


  return (
    <>
      <WarehouseDetails />

      <li>
        {inventoriesForWarehouse.map((inventory) => {
          return (
            <>
              <p>{inventory.item_name}</p>
              <p>{inventory.category}</p>
              <p>{inventory.status}</p>
              <p>{inventory.quantity}</p>
            </>
          )
        })}
      </li>
    </>

  )
}

export default WarehousePage