import "./InventoryDataList.scss";
import { useEffect, useState } from "react";
import SortIcon from "../../assets/Icons/sort-24px.svg";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import ChevronIcon from "../../assets/Icons/chevron_right-24px.svg"
import { NavLink } from "react-router-dom";
import axios from "axios";
import Modal from "../../components/Modal/Modal";


function InventoryDataList() {

    const api_URL = `${process.env.REACT_APP_API_URL}/inventories`;

    const [inventoryData, setInventoryData] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInventory, setSelectedInventory] = useState(null);
    const [item, setItem] = useState('');

    const openModal = (inventory) => {
        setSelectedInventory(inventory);
        setItem(inventory.item_name);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedInventory(null);
        setIsModalOpen(false);
    };

    const handleDelete = () => {
        axios
            .delete(`${api_URL}/${selectedInventory.id}`)
            .then(() => {
                setInventoryData((prevData) =>
                    prevData.filter((inventory) => inventory.id !== selectedInventory.id)
                );
                closeModal();
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
            });
    };

    useEffect(() => {
        axios
            .get(api_URL)
            .then((response) => {
                // console.log(response.data);
                setInventoryData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="inventory-data-list">
            <ul className="inventory-data-list__unordered-list">
                <li className="inventory-data-list__heading">
                    <div className="inventory-data-list__heading-wrapper">
                    <div className="inventory-data-list__heading-div">
                        <p className="inventory-data-list__content-items-heading">INVENTORY ITEM</p>
                        <img src={SortIcon} alt="sort icon" />
                    </div>
                    </div>
                    <div className="inventory-data-list__heading-wrapper">
                    <div className="inventory-data-list__heading-div">
                    <p className="inventory-data-list__content-items-heading">CATEGORY</p>
                    <img src={SortIcon} alt="sort icon" />
                    </div>
                    </div>
                    <div className="inventory-data-list__heading-wrapper">
                    <div className="inventory-data-list__heading-div">
                    <p className="inventory-data-list__content-items-heading">STATUS</p>
                    <img src={SortIcon} alt="sort icon" />
                    </div>
                    </div>
                    <div className="inventory-data-list__heading-wrapper">
                    <div className="inventory-data-list__heading-div">
                    <p className="inventory-data-list__content-items-heading">QTY</p>
                    <img src={SortIcon} alt="sort icon" />
                    </div>
                    </div>
                    <div className="inventory-data-list__heading-wrapper">
                    <div className="inventory-data-list__heading-div">
                    <p className="inventory-data-list__content-items-heading">WAREHOUSE</p>
                    <img src={SortIcon} alt="sort icon" />
                    </div>
                    </div>
                    <p className="inventory-data-list__content-items-heading">ACTIONS</p>
                </li>

                {inventoryData.map((inventory) => {
                    return (
                        <li key={inventory.id} className="inventory-data-list__list">
                            <div className="inventory-data-list__content-container">
                                <div className="inventory-data-list__content-wrapper inventory-data-list__content-wrapper--left">
                                    <div className="inventory-data-list__content inventory-data-list__content--left">
                                        <p className="inventory-data-list__content-items inventory-data-list__content-items--header">INVENTORY ITEM</p>
                                        <div className="inventory-data-list__content-items">
                                            <div className="inventory-data-list__inventoryItem-container">
                                                <NavLink to="/inventory">
                                                    {inventory.item_name}
                                                </NavLink>
                                                <img src={ChevronIcon} alt="chevron icon" />
                                            </div>
                                        </div>


                                    </div>

                                    <div className="inventory-data-list__content inventory-data-list__content--left">
                                        <p className="inventory-data-list__content-items inventory-data-list__content-items--header">CATEGORY</p>
                                        <p className="inventory-data-list__content-items">{inventory.category}</p>
                                    </div>
                                </div>


                                <div className="inventory-data-list__content-wrapper inventory-data-list__content-wrapper--right">
                                    <div className="inventory-data-list__content">
                                        <p className="inventory-data-list__content-items inventory-data-list__content-items--header">STATUS</p>
                                        <div className="inventory-data-list__content-items-status-container">
                                            <p className="inventory-data-list__content-items inventory-data-list__content-items--status">{inventory.status}</p>
                                        </div>
                                    </div>

                                    <div className="inventory-data-list__content">
                                        <p className="inventory-data-list__content-items inventory-data-list__content-items--header">QTY</p>
                                        <p className="inventory-data-list__content-items">{inventory.quantity}</p>
                                    </div>

                                    <div className="inventory-data-list__content">
                                        <p className="inventory-data-list__content-items inventory-data-list__content-items--header">WAREHOUSE</p>
                                        <p className="inventory-data-list__content-items inventory-data-list__content-items--warehouse">{inventory.warehouse_id}</p>
                                    </div>
                                </div>
                            </div>


                            <div className="inventory-data-list__images-container">
                                <div className="inventory-data-list__images-wrapper inventory-data-list__images-wrapper--delete">
                                    <img onClick={() => openModal(inventory)}
                                        className="inventory-data-list__image inventory-data-list__image--delete" src={DeleteIcon} />
                                </div>
                                <div className="inventory-data-list__images-wrapper inventory-data-list__images-wrapper--edit">
                                    <img className="inventory-data-list__image inventory-data-list__image--edit" src={EditIcon} />
                                </div>
                            </div>
                        </li>

                    )
                }



                )}


            </ul>
            {
                selectedInventory && (
                    <Modal
                        calledFromPage="Inventories"
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        onDelete={handleDelete}
                        item={item}
                    />
                )
            }
        </div>
    );
}

export default InventoryDataList;