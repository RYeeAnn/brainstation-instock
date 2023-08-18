import "./WarehouseDataList.scss";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";
import ChevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
// import { useParams } from "react-router-dom";

function WarehouseDataList() {
    const api_URL = `${process.env.REACT_APP_API_URL}/warehouses`;
    
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const [warehouseData, setWarehouseData] = useState([]);
    const [city, setCity] = useState('');

    const openModal = (warehouse) => {
        setSelectedWarehouse(warehouse);
        setCity(warehouse.warehouse_name);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedWarehouse(null);
        setIsModalOpen(false);
    };

    const handleDelete = () => {
        axios
          .delete(`${api_URL}/${selectedWarehouse.id}`)
          .then(() => {
            setWarehouseData((prevData) =>
              prevData.filter((warehouse) => warehouse.id !== selectedWarehouse.id)
            );
            closeModal();
          })
          .catch((error) => {
            console.error("Error deleting warehouse:", error);
          });
      };

      const handleEditWarehouse = (id) => {
        navigate(`/warehouses/editWarehouse/${id}`)
      }

    useEffect(() => {
        axios
            .get(api_URL)
            .then((response) => {
                setWarehouseData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="warehouse-data-list__section">
            <ul className="warehouse-data-list__header-unordered-list">
                <li className="warehouse-data-list__header-list">
                    <div className="warehouse-data-list__header">
                        <p className="warehouse-data-list__header-list-items">WAREHOUSE</p>
                        <img
                            className="warehouse-data-list__header-sort"
                            src={SortIcon}
                            alt="sort icon"
                        />
                    </div>
                    <div className="warehouse-data-list__header">
                        <p className="warehouse-data-list__header-list-items">ADDRESS</p>
                        <img
                            className="warehouse-data-list__header-sort"
                            src={SortIcon}
                            alt="sort icon"
                        />
                    </div>
                    <div className="warehouse-data-list__header">
                        <p className="warehouse-data-list__header-list-items warehouse-data-list__header-list-items--modified">
                            CONTACT NAME
                        </p>
                        <img
                            className="warehouse-data-list__header-sort"
                            src={SortIcon}
                            alt="sort icon"
                        />
                    </div>
                    <div className="warehouse-data-list__header">
                        <p className="warehouse-data-list__header-list-items">
                            CONTACT INFORMATION
                        </p>
                        <img
                            className="warehouse-data-list__header-sort"
                            src={SortIcon}
                            alt="sort icon"
                        />
                    </div>
                    <div className="warehouse-data-list__header">
                        <p className="warehouse-data-list__header-list-items">ACTIONS</p>
                    </div>
                </li>

                {warehouseData.map((warehouse) => {
                    return (
                        <li
                            key={warehouse.id}
                            className="warehouse-data-list__content-list"
                        >
                            <div className="warehouse-data-list__content-list-div">
                                <div className="warehouse-data-list__content-list-wrapper warehouse-data-list__content-list-wrapper--left ">
                                    <div className="warehouse-data-list__content-list-items">
                                        {/* <div className="warehouse-data-list__content-list-items-value"> */}

                                        <p className="warehouse-data-list__header-list-items warehouse-data-list__header-list-items--column">WAREHOUSE</p>

                                    <div className="warehouse-data-list__header-list-warehouse">

                                        <NavLink
                                            to={`/warehouses/${warehouse.id}`}
                                            className="warehouse-data-list__content-warehouse"
                                        >
                                            {warehouse.warehouse_name}
                                        </NavLink>
                                        {/* </div> */}
                                        {/* <div className="warehouse-data-list__content-list-items-value"> */}
                                        <img
                                            className="warehouse-data-list__content-warehouse-chevron"
                                            src={ChevronIcon}
                                            alt="chevron icon"
                                        />
                                        {/* </div> */}
                                        </div>
                                    </div>
                                    <div className="warehouse-data-list__content-list-items-value">
                                        <p className="warehouse-data-list__header-list-items warehouse-data-list__header-list-items--column">ADDRESS</p>
                                        <p className="warehouse-data-list__content-list-items">
                                            {warehouse.address}, {warehouse.city}, {warehouse.country}
                                        </p>
                                    </div>

                                </div>

                                <div className="warehouse-data-list_content-list-wrapper warehouse-data-list__content-list-wrapper--right">

                                    <p className="warehouse-data-list__header-list-items warehouse-data-list__header-list-items--column">
                                        CONTACT NAME
                                    </p>

                                    <p className="warehouse-data-list__content-list-items warehouse-data-list__content-list-items--modified">
                                        {warehouse.contact_name}
                                    </p>
                                    <div className="warehouse-data-list__content-list-items warehouse-data-list__content-list-items--column">
                                        <p className="warehouse-data-list__header-list-items warehouse-data-list__header-list-items--column">
                                            CONTACT INFORMATION
                                        </p>
                                        <p>{warehouse.contact_phone}</p>
                                        <p>{warehouse.contact_email}</p>
                                    </div>

                                </div>


                            </div>
                            <div className="warehouse-data-list__content-list-images-container">
                                {/* <div className="warehouse-data-list__content-list-items"> */}
                                <div className="warehouse-data-list__content-list-delete-container">
                                    <img
                                        onClick={() => openModal(warehouse)}
                                        className="warehouse-data-list__content-list-images warehouse-data-list__content-list-images--left"
                                        src={DeleteIcon}
                                    />
                                </div>
                                <div className="warehouse-data-list__content-list-edit-container">
                                    <img
                                        onClick = {(id) => handleEditWarehouse(warehouse.id)}
                                        className="warehouse-data-list__content-list-images warehouse-data-list__content-list-images--right"
                                        src={EditIcon}
                                    />
                                </div>
                                {/* </div> */}
                            </div>
                        </li>
                    );
                })}
            </ul>
            {
                selectedWarehouse && (
                    <Modal 
                    calledFromPage="Warehouses"
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onDelete={handleDelete}
                    city={city}
                    />
                )
            }
        </section>
    );
}

export default WarehouseDataList;
