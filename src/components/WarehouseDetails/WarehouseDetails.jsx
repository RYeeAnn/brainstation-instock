import React from "react";
import "./WarehouseDetails.scss";

function WarehouseDetails({ warehouse }) {
  // console.log("WAREHOUSE", warehouse)
  return (
    <section className="warehouse-section">
      <div className="warehouse-details">
        <div className="warehouse-detail">
          <h3 className="warehouse-detail__title warehouse-detail__address">WAREHOUSE ADDRESS:</h3>
          <p className="warehouse-detail__info warehouse-detail__info--address">
            {warehouse?.address}, {warehouse?.city}, {warehouse?.country}
          </p>
        </div>
        <div className="contact-details">
          <div className="warehouse-detail__contact-name">
            <h3 className="warehouse-detail__title">CONTACT NAME:</h3>
            <p className="warehouse-detail__info">{warehouse?.contact_name}</p>
            <p className="warehouse-detail__info">{warehouse?.contact_position}</p>
          </div>
          <div className="warehouse-detail__contact-info">
            <h3 className="warehouse-detail__title">CONTACT INFORMATION:</h3>
            <p className="warehouse-detail__info">{warehouse?.contact_phone}</p>
            <p className="warehouse-detail__info">{warehouse?.contact_email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WarehouseDetails;
