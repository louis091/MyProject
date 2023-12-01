import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function AddContract() {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
  const navigate = useNavigate();

  const contractSubmit = async (values) => {
    console.log(values);
    const { data } = await axios.post(
      "http://localhost:3000/api/add-contract",
      values
    );
    if (data.success === true) {
      alert("Thêm hợp đồng thành công");
      navigate("/contract");
    }
  };
  return (
    <>
      <div className="container-fluid border-3 bg-slate-300">
        <div className="row">
          <span className="text-3xl text-center font-bold py-3 items-center">
            Add Contract
          </span>
        </div>
        <form
          action="POST"
          className="form-horizontal py-5 h-auto ml-10 mr-10 px-6"
          onSubmit={handleSubmit(contractSubmit)}
        >
          <div className="row g-3">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">Mã HD:</label>
                </div>
                <div className="col-md-9">
                  <input
                    readOnly
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                    placeholder="HỆ THỐNG TỰ CẤP"
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
                    readOnly
                    type="text"
                    placeholder="HỆ THỐNG TỰ CẤP"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">Họ và Tên:</label>
                </div>
                <div className="col-md-9">
                  <input
                    {...register("name")}
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">CMND</label>
                </div>
                <div className="col-md-9">
                  <input
                    {...register("cmnd")}
                    type="text"
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
                    {...register("address")}
                    type="text"
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
                    {...register("createdAt")}
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label" htmlFor="dob_year">
                    Sinh Năm
                  </label>
                </div>
                <div className="col-md-9">
                  <input
                    {...register("dob")}
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                    size="4"
                    maxLength="4"
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
                    {...register("value")}
                    type="text"
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
                    {...register("deposit")}
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">Số Điện Thoại</label>
                </div>
                <div className="col-md-9">
                  <input
                    {...register("number")}
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <div className="grid grid-cols-1">
                <button
                  className="btn btn-primary w-48 bg-blue-600"
                  type="submit"
                >
                  Thêm
                </button>
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
