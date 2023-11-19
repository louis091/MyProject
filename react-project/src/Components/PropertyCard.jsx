import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PropertyCard() {
  const [properties, setProperty] = useState([]);

  function FetchData() {
    console.log("TESTTTT");
    fetch("http://localhost:7154/property")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unexpected Server Response");
        }
        return response.json();
      })
      .then((data) => {
        setProperty(data);
      })
      .catch((error) => console.log("Error: ", error));
  }

  useEffect(() => FetchData(), []);
  return (
    <>
      {properties.map((property, index) => {
        return (
          <div className="container-fluid py-3">
            <div className="row bg-light py-3 border-3 border-slate-800">
              <div className="col-3">
                <div className="product-banner flex flex-wrap">
                  <img src={property.image} alt="" />
                </div>
              </div>
              <div className="col-3">
                <div className="product-content px-3 py-3">
                  <p>key={index}</p>
                  <p className="font-bold text-xl">
                    Tên Bất Động Sản: {property.project}
                  </p>
                  <p>
                    <b>Loại</b>: {property.type}
                  </p>
                  <p>
                    <b>Tỉnh Thành</b>: {property.country}
                  </p>
                  <p>
                    <b>Địa Chỉ</b>: {property.address}
                  </p>
                  <p>
                    <b>Diện Tích: </b>
                    {property.scale}
                  </p>
                  <p>
                    <b>Số Lượng Phòng</b>: {property.room}
                  </p>
                  <p>
                    <b>Dịch vụ</b>: {property.service}
                  </p>
                  <p>
                    <b>Giá</b>: {property.price}
                  </p>
                  <p>
                    <b>Trạng Thái</b>: {property.status}
                  </p>
                </div>
              </div>
              <div className="col-6 text-end">
                <div className="link-product-content">
                  <Link
                    to="/"
                    className="button btn-success text-xl px-5 py-2 position-relative m-auto top-20"
                  >
                    LIÊN HỆ
                  </Link>
                </div>
                <div className="link-product-content">
                  <Link
                    to="/"
                    className="button btn-primary text-xl px-5 py-2 position-relative m-auto"
                  >
                    UPDATE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
