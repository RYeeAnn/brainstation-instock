import React from "react";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseDataList from "../../components/WarehouseDataList/WarehouseDataList";
import TitleBar from "../../components/TitleBar/TitleBar";

function WarehousesPage() {
    return (
        <div>
        <TitleBar />
        <WarehouseDataList />
        </div>
    );
}

export default WarehousesPage;
