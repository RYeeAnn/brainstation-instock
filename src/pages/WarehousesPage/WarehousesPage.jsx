import React, { useState } from "react";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseDataList from "../../components/WarehouseDataList/WarehouseDataList";
import PageTitleBarSearch from "../../components/PageTitleBarSearch/PageTitleBarSearch";

import "./WarehousesPage.scss";


function WarehousesPage() {
    return (
        <div className="warehouses-section">
        <PageTitleBarSearch title="Warehouses" buttonText="+ Add New Warehouse" pageName="addWarehouse" />
        <WarehouseDataList />
        </div>
    );
}

export default WarehousesPage;
