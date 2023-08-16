import "./WarehouseDataList.scss"
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import EditIcon from "../../assets/Icons/edit-24px.svg"
import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

function WarehouseDataList() {
    const api_URL = `${process.env.REACT_APP_API_URL}/warehouses`;
    // console.log(api_URL);
    const [warehouseData, setWarehouseData] = useState([]);

    useEffect(() => {
        axios.get(api_URL).then((response) => {
            // console.log(response.data);
            setWarehouseData(response.data);
        })
    .catch((error) => {
        console.log(error);
    })}, []
    )

    return (
        <ul className="datalist__header-unordered-list">
            <li className="datalist__header-list">
                <p className="datalist__header-list-items">WAREHOUSE</p>
                <p className="datalist__header-list-items">ADDRESS</p>
                <p className="datalist__header-list-items">CONTACT NAME</p>
                <p className="datalist__header-list-items">CONTACT INFORMATION</p>
                <p className="datalist__header-list-items">ACTIONS</p>
            </li>

            {
                warehouseData.map((warehouse) => {
                    return (
                        <li key={warehouse.id} className="datalist__header-list">
                            <p>{warehouse.warehouse_name}</p>
                            <p>{warehouse.address}</p>
                            <p>{warehouse.contact_name}</p>
                            <p>
                                <div>
                                    <p>{warehouse.contact_phone}</p>
                                    <p>{warehouse.contact_email}</p>
                                </div>
                            </p>
                            <p>
                                <div>
                                    <img src={DeleteIcon} />
                                    <img src={EditIcon} />
                                </div>
                            </p>
                        </li>
                    )
                })
            }

        </ul>
    );
}

export default WarehouseDataList;