import "./InventoryDataList.scss";
import { useEffect, useState } from "react";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import ChevronIcon from "../../assets/Icons/chevron_right-24px.svg"
import { NavLink } from "react-router-dom";

function InventoryDataList() {

    const [inventoryData, setInventoryData] = useState([]);

    // useEffect(() => {
    //     axios.get("/")
    // },[])

    return (
        <div className="inventory-data-list">
            <ul className="inventory-data-list__unordered-list">
                <li className="inventory-data-list__heading">
                    <p className="inventory-data-list__content-items-heading">INVENTORY ITEM</p>
                    <p className="inventory-data-list__content-items-heading">CATEGORY</p>
                    <p className="inventory-data-list__content-items-heading">STATUS</p>
                    <p className="inventory-data-list__content-items-heading">QTY</p>
                    <p className="inventory-data-list__content-items-heading">WAREHOUSE</p>
                    <p className="inventory-data-list__content-items-heading">ACTIONS</p>
                </li>

                <li className="inventory-data-list__list">
                    <div className="inventory-data-list__content-container">
                        <div className="inventory-data-list__content-wrapper">
                            <div className="inventory-data-list__content">
                                <p className="inventory-data-list__content-items inventory-data-list__content-items--header">INVENTORY ITEM</p>
                                
                                <p className="inventory-data-list__content-items">
                                    <div className="inventory-data-list__inventoryItem-container">
                                <NavLink to="/inventory">
                                    Television
                                    </NavLink>
                                    <img src={ChevronIcon} alt="chevron icon"/>
                                    </div>
                                </p>
                                
                                
                            </div>

                            <div className="inventory-data-list__content">
                                <p className="inventory-data-list__content-items inventory-data-list__content-items--header">CATEGORY</p>
                                <p className="inventory-data-list__content-items">Electronics</p>
                            </div>
                        </div>


                        <div className="inventory-data-list__content-wrapper">
                            <div className="inventory-data-list__content">
                                <p className="inventory-data-list__content-items inventory-data-list__content-items--header">STATUS</p>
                                <div className="inventory-data-list__content-items-status-container">
                                <p className="inventory-data-list__content-items inventory-data-list__content-items--status">In Stock</p>
                                </div>
                            </div>

                            <div className="inventory-data-list__content">
                                <p className="inventory-data-list__content-items inventory-data-list__content-items--header">QTY</p>
                                <p className="inventory-data-list__content-items">500</p>
                            </div>

                            <div className="inventory-data-list__content">
                                <p className="inventory-data-list__content-items inventory-data-list__content-items--header">WAREHOUSE</p>
                                <p className="inventory-data-list__content-items">Manhattan</p>
                            </div>
                        </div>
                    </div>


                    <div className="inventory-data-list__images-container">
                        <div className="inventory-data-list__images-wrapper inventory-data-list__images-wrapper--delete">
                        <img className="inventory-data-list__image inventory-data-list__image--delete" src={DeleteIcon} />
                        </div>
                        <div className="inventory-data-list__images-wrapper inventory-data-list__images-wrapper--edit">
                        <img className="inventory-data-list__image inventory-data-list__image--edit" src={EditIcon} />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default InventoryDataList;