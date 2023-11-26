import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ContractCard() {
  const [contracts, setContract] = useState([]);

  function FetchData() {
    fetch("http://localhost:7155/contract")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unexpected Server Response");
        }
        return response.json();
      })
      .then((data) => {
        setContract(data);
      })
      .catch((error) => console.log("Error: ", error));
  }

  useEffect(() => FetchData(), []);
  return (
    <>
      {contracts.map((contract, index) => {
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
                  <p className="font-bold text-xl">
                    Mã Hợp Đồng: {contract.contractid}
                    {contract.id}
                  </p>
                  <p>
                    <b>Mã Bất Động Sản</b>: {contract.propid}
                  </p>
                  <p>
                    <b>Họ và Tên:</b>: {contract.name}
                  </p>
                  <p>
                    <b>Số Điện Thoại: </b>: {contract.number}
                  </p>
                  <p>
                    <b>Địa Chỉ </b>
                    {contract.address}
                  </p>
                  <p>
                    <b>CMND</b>: {contract.cmnd}
                  </p>
                  <p>
                    <b>Ngày Lập:</b>: {contract.createdAt}
                  </p>
                  <p>
                    <b>Ngày Hết Hạn</b>: {contract.expiryDate}
                  </p>
                  <p>
                    <b>Số Tiền</b>: {contract.price}
                  </p>
                  <p>
                    <b>Trạng Thái</b>: {contract.status}
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

export default ContractCard;
