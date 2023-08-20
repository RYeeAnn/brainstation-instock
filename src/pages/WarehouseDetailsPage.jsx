import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import WarehouseDetails from "../components/WarehouseDetails/WarehouseDetails"; // Adjust the path as needed

function WarehouseDetailsPage(props) {
  const warehouseId = props.match.params.id;
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  useEffect(() => {
    // Fetch warehouse details using Axios or your preferred method
    axios
      .get(`${process.env.REACT_APP_API_URL}/warehouses/${warehouseId}`)
      .then((response) => {
        setSelectedWarehouse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching warehouse details:", error);
      });
  }, [warehouseId]);

  return (
    <div>
      {selectedWarehouse ? (
        <WarehouseDetails warehouse={selectedWarehouse} />
      ) : (
        <p>Loading warehouse details...</p>
      )}
    </div>
  );
}

export default WarehouseDetailsPage;
