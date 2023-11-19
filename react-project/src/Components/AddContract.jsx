import React from "react";
import { useNavigate } from "react-router-dom";

function AddContract() {
  const navigat = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const contract = Object.fromEntries(formData.entries());

    if (
      !contract.name ||
      !contract.dob ||
      !contract.cmnd ||
      !contract.address ||
      !contract.propid ||
      !contract.createdAt ||
      !contract.value ||
      !contract.deposit
    ) {
      console.log("Please provide all the required informations");
      return;
    }
    fetch("http://localhost:7155/contract", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(contract),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.log("Error: ", error);
      });
  }
  return (
    <>
      <div className="container-fluid border-3 bg-slate-300">
        <div className="row">
          <span className="text-3xl text-center font-bold py-3 items-center">
            Add Contract
          </span>
        </div>
        <form
          action=""
          className="form-horizontal py-5 h-auto ml-10 mr-10 px-6"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="row g-3">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">Họ và Tên:</label>
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">Sinh Năm</label>
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="dob"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">Địa Chỉ</label>
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">CMND</label>
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="cmnd"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">Mã Bất Động Sản</label>
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="propid"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">Ngày Lập Hợp Đồng</label>
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="createdAt"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">Giá Trị Hợp Đồng</label>
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="value"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">Số tiền đã cọc</label>
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    name="deposit"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <div className="grid grid-cols-1">
                <input
                  type="submit"
                  className="form-control bg-primary w-48"
                  value="ADD"
                />
              </div>
              <div className="grid grid-cols-1">
                <button className="btn btn-danger w-48">Cancel</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddContract;
