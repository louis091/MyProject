import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../assets/format";

export default function PropertyCard() {
  const [properties, setProperty] = useState([]);

  const fetchProperty = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/property");
      if (data.success === true) {
        setProperty(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, []);
  return (
    <>
      {properties.map((property) => {
        return (
          <div className="container-fluid py-3">
            <div className="row bg-light py-3 border-3 border-slate-800">
              <div className="col-3">
                <div className="product-banner flex flex-wrap">
                  <img src="/small-banner.jpg" alt="" />
                </div>
              </div>
              <div className="col-3">
                <div className="product-content px-3 py-3">
                  <p>
                    <b>Tên Bất Động Sản</b>: {property.name}
                  </p>
                  <p>
                    <b>Loại</b>: {property.type}
                  </p>
                  <p>
                    <b>Mã Bất Động Sản</b>: {property.propID}
                  </p>
                  <p>
                    <b>Tỉnh Thành</b>: {property.country}
                  </p>
                  <p>
                    <b>Quận/Huyện</b>: {property.district}
                  </p>
                  <p>
                    <b>Địa Chỉ</b>: {property.address}
                  </p>
                  <p>
                    <b>Diện Tích: </b>
                    {property.scale}
                  </p>
                  <p>
                    <b>Số Lượng Phòng</b>: {property.rooms}
                  </p>
                  <p>
                    <b>Dịch vụ</b>: {property.service}
                  </p>
                  <p>
                    <b>Giá</b>: {formatCurrency(property.value)}
                  </p>
                  <p>
                    <b>Trạng Thái</b>:{" "}
                    <span className="text-green-600 fw-bold bg-white">
                      AVAILABLE
                    </span>
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
