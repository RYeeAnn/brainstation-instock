import React from "react";
import "./WarehouseDetails.scss";

function WarehouseDetails() {
  return (
    <>
      <section className="warehouse-section">
        <div className="warehouse-details">
          <div className="warehouse-detail">
            <h3 className="warehouse-detail__title warehouse-detail__address">WAREHOUSE ADDRESS:</h3>
            <p className="warehouse-detail__info">33 Pearl Street SW, Washington, USA</p>
          </div>
          <div className="contact-details">
            <div className="warehouse-detail__contact-name">
              <h3 className="warehouse-detail__title">CONTACT NAME:</h3>
              <p className="warehouse-detail__info">Graeme Lyon</p>
              <p className="warehouse-detail__info">Warehouse Manager</p>
            </div>
            <div className="warehouse-detail__contact-info">
              <h3 className="warehouse-detail__title">CONTACT INFORMATION:</h3>
              <p className="warehouse-detail__info">+1 (647) 504-0911</p>
              <p className="warehouse-detail__info">gylon@instock.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WarehouseDetails;
