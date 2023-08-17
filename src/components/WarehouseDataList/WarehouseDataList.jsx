import "./WarehouseDataList.scss";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";
import ChevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
// import { useParams } from "react-router-dom";

function WarehouseDataList() {
  const api_URL = `${process.env.REACT_APP_API_URL}/warehouses`;
  // console.log(api_URL);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [warehouseData, setWarehouseData] = useState([]);
  const [modalTitle, setModalTitle] = useState("Delete Warehouse?");
  const [city, setCity] = useState('')

  const openModal = (warehouse) => {
    setSelectedWarehouse(warehouse);
    setCity(warehouse.city)
    setModalTitle(`Delete ${warehouse.city} Warehouse?`)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedWarehouse(null)
    setIsModalOpen(false);
    setModalTitle("Delete Warehouse?");
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

  useEffect(() => {
    console.log(selectedWarehouse)
    axios
      .get(api_URL)
      .then((response) => {
        // console.log(response.data);
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
            <p className="warehouse-data-list__header-list-items">
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
              <div className="warehouse-data-list__content-list-items">
                <NavLink
                  to={`/warehouses/${warehouse.id}`}
                  className="warehouse-data-list__content-warehouse"
                >
                  {warehouse.warehouse_name}
                </NavLink>
                <img
                  className="warehouse-data-list__content-warehouse-chevron"
                  src={ChevronIcon}
                  alt="chevron icon"
                />
              </div>
              <p className="warehouse-data-list__content-list-items">
                {warehouse.address}, {warehouse.city}, {warehouse.country}
              </p>
              <p className="warehouse-data-list__content-list-items">
                {warehouse.contact_name}
              </p>
              <div className="warehouse-data-list__content-list-items warehouse-data-list__content-list-items--column">
                <p>{warehouse.contact_phone}</p>
                <p>{warehouse.contact_email}</p>
              </div>
              <div className="warehouse-data-list__content-list-items">
                <img
                  onClick={() => openModal(warehouse)}
                  className="warehouse-data-list__content-list-images warehouse-data-list__content-list-images--left"
                  src={DeleteIcon}
                />
                <img
                  className="warehouse-data-list__content-list-images"
                  src={EditIcon}
                />
              </div>
            </li>
          );
        })}
      </ul>
      {selectedWarehouse && (
        <Modal
          title={modalTitle}
          isOpen={isModalOpen}
          onClose={closeModal}
          onDelete={handleDelete}
          city={city}
        />
      )}
    </section>
  );
}

export default WarehouseDataList;
