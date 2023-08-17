import React, { useState } from "react";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseDataList from "../../components/WarehouseDataList/WarehouseDataList";
import WarehouseTitleBar from "../../components/WarehouseTitleBar/WarehouseTitleBar";
import "./WarehousesPage.scss";

function WarehousesPage() {
    return (
        <div className="warehouses-section">
        <WarehouseTitleBar />
        <WarehouseDataList />
        </div>
    );
}

export default WarehousesPage;
