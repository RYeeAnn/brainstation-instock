import React from "react";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseDataList from "../../components/WarehouseDataList/WarehouseDataList";
import TitleBar from "../../components/TitleBar/TitleBar";

function WarehousesPage() {
    return (
        <>
        <TitleBar />
        <WarehouseDataList />
        </>
    );
}

export default WarehousesPage;
