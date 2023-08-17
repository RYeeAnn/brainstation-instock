import React, { useState } from "react";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseDataList from "../../components/WarehouseDataList/WarehouseDataList";
import TitleBar from "../../components/TitleBar/TitleBar";
import "./WarehousesPage.scss";

function WarehousesPage() {
    return (
        <div className="warehouses-section">
        <TitleBar />
        <WarehouseDataList />
        </div>
    );
}

export default WarehousesPage;
