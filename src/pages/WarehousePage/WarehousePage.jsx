import "./WarehousePage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import PageTitleBar from "../../components/PageTitleBar/PageTitleBar";
import InventoryDataList from "../../components/InventoryDataList/InventoryDataList";

import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

function WarehousePage() {
  let api_url = process.env.REACT_APP_API_URL;
  let { warehouseID } = useParams();

  const [warehouseName, setWarehouseName] = useState("");
  const [warehouse, setWarehouse] = useState("");

  useEffect(() => {
    axios.get(`${api_url}/warehouses/${warehouseID}`).then((res) => {
      setWarehouseName(res.data[0].warehouse_name);
      setWarehouse(res.data[0])
    });
  }, []);


  
  
  
  
  
  
  
  return (
    <div>
      <PageTitleBar title={warehouseName} edit={true} />
      <WarehouseDetails warehouse={warehouse} />
      <InventoryDataList warehouseID={warehouseID} />
    </div>
  );
}

export default WarehousePage;
