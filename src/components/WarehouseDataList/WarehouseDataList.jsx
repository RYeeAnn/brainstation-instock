import "./WarehouseDataList.scss"
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import EditIcon from "../../assets/Icons/edit-24px.svg"
import SortIcon from "../../assets/Icons/sort-24px.svg"
import ChevronIcon from "../../assets/Icons/chevron_right-24px.svg"
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
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
        <section className="warehouse-data-list__section">
        <ul className="warehouse-data-list__header-unordered-list">
            <li className="warehouse-data-list__header-list">
                <div className="warehouse-data-list__header">
                    <p className="warehouse-data-list__header-list-items">WAREHOUSE</p>
                    <img className="warehouse-data-list__header-sort" src={SortIcon} alt="sort icon"/>
                </div>
                <div className="warehouse-data-list__header">
                    <p className="warehouse-data-list__header-list-items">ADDRESS</p>
                    <img className="warehouse-data-list__header-sort" src={SortIcon} alt="sort icon"/>
                </div>
                <div className="warehouse-data-list__header">
                    <p className="warehouse-data-list__header-list-items">CONTACT NAME</p>
                    <img className="warehouse-data-list__header-sort" src={SortIcon} alt="sort icon"/>
                </div>
                <div className="warehouse-data-list__header">
                    <p className="warehouse-data-list__header-list-items">CONTACT INFORMATION</p>
                    <img className="warehouse-data-list__header-sort" src={SortIcon} alt="sort icon"/>
                </div>
                <div className="warehouse-data-list__header">
                    <p className="warehouse-data-list__header-list-items">ACTIONS</p>
                </div>
            </li>

            {
                warehouseData.map((warehouse) => {
                    return (
                        <li key={warehouse.id} className="warehouse-data-list__content-list">
                            <div className="warehouse-data-list__content-list-items">
                                <NavLink to={`/warehouses/${warehouse.id}`} className="warehouse-data-list__content-warehouse">{warehouse.warehouse_name}</NavLink>
                                <img className="warehouse-data-list__content-warehouse-chevron" src={ChevronIcon} alt="chevron icon" />
                            </div>
                            <p className="warehouse-data-list__content-list-items">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                            <p className="warehouse-data-list__content-list-items">{warehouse.contact_name}</p>
                            <div className="warehouse-data-list__content-list-items warehouse-data-list__content-list-items--column">
                                    <p>{warehouse.contact_phone}</p>
                                    <p>{warehouse.contact_email}</p>
                            </div>
                            <div className="warehouse-data-list__content-list-items">
                                    <img className="warehouse-data-list__content-list-images warehouse-data-list__content-list-images--left" src={DeleteIcon} />
                                    <img className="warehouse-data-list__content-list-images" src={EditIcon} />
                            </div>
                        </li>
                    )
                })
            }

        </ul>
        </section>
    );
}

export default WarehouseDataList;