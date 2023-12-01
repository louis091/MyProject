import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddProperty() {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
  const navigate = useNavigate();

  const propertySubmit = async (values) => {
    console.log(values);
    const { data } = await axios.post(
      "http://localhost:3000/api/add-property",
      values
    );
    if (data.success === true) {
      alert("Thêm Bất Động Sản thành công");
      navigate("/property");
    }
  };
  return (
    <>
      <div className="container-fluid border-3 bg-slate-300">
        <div className="row">
          <span className="text-3xl text-center font-bold py-3 items-center">
            Add Property
          </span>
        </div>
        <form
          action="POST"
          className="form-horizontal py-5 h-auto ml-10 mr-10 px-6"
          onSubmit={handleSubmit(propertySubmit)}
        >
          <div className="row g-3">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">Tên Bất Động Sản</label>
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
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">Loại Bất Động Sản</label>
                </div>
                <div className="col-md-9">
                  <input
                    {...register("type")}
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
                  <label className="form-label">Tỉnh Thành</label>
                </div>
                <div className="col-md-9">
                  <select
                    {...register("country")}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="">Chọn Tỉnh Thành</option>
                    <option value="An Giang">An Giang</option>
                    <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                    <option value="Bắc Giang">Bắc Giang</option>
                    <option value="Bắc Kạn">Bắc Kạn</option>
                    <option value="Bạc Liêu">Bạc Liêu</option>
                    <option value="Bắc Ninh">Bắc Ninh</option>
                    <option value="Bến Tre">Bến Tre</option>
                    <option value="Bình Định">Bình Định</option>
                    <option value="Bình Dương">Bình Dương</option>
                    <option value="Bình Phước">Bình Phước</option>
                    <option value="Bình Thuận">Bình Thuận</option>
                    <option value="Cà Mau">Cà Mau</option>
                    <option value="Cao Bằng">Cao Bằng</option>
                    <option value="Đắk Lắk">Đắk Lắk</option>
                    <option value="Đắk Nông">Đắk Nông</option>
                    <option value="Điện Biên">Điện Biên</option>
                    <option value="Đồng Nai">Đồng Nai</option>
                    <option value="Đồng Tháp">Đồng Tháp</option>
                    <option value="Đồng Tháp">Đồng Tháp</option>
                    <option value="Gia Lai">Gia Lai</option>
                    <option value="Hà Giang">Hà Giang</option>
                    <option value="Hà Nam">Hà Nam</option>
                    <option value="Hà Tĩnh">Hà Tĩnh</option>
                    <option value="Hải Dương">Hải Dương</option>
                    <option value="Hậu Giang">Hậu Giang</option>
                    <option value="Hòa Bình">Hòa Bình</option>
                    <option value="Hưng Yên">Hưng Yên</option>
                    <option value="Khánh Hòa">Khánh Hòa</option>
                    <option value="Kiên Giang">Kiên Giang</option>
                    <option value="Kon Tum">Kon Tum</option>
                    <option value="Lai Châu">Lai Châu</option>
                    <option value="Lâm Đồng">Lâm Đồng</option>
                    <option value="Lạng Sơn">Lạng Sơn</option>
                    <option value="Lào Cai">Lào Cai</option>
                    <option value="Long An">Long An</option>
                    <option value="Nam Định">Nam Định</option>
                    <option value="Nghệ An">Nghệ An</option>
                    <option value="Ninh Bình">Ninh Bình</option>
                    <option value="Ninh Thuận">Ninh Thuận</option>
                    <option value="Phú Thọ">Phú Thọ</option>
                    <option value="Quảng Bình">Quảng Bình</option>
                    <option value="Quảng Bình">Quảng Bình</option>
                    <option value="Quảng Ngãi">Quảng Ngãi</option>
                    <option value="Quảng Ninh">Quảng Ninh</option>
                    <option value="Quảng Trị">Quảng Trị</option>
                    <option value="Sóc Trăng">Sóc Trăng</option>
                    <option value="Sơn La">Sơn La</option>
                    <option value="Tây Ninh">Tây Ninh</option>
                    <option value="Thái Bình">Thái Bình</option>
                    <option value="Thái Nguyên">Thái Nguyên</option>
                    <option value="Thanh Hóa">Thanh Hóa</option>
                    <option value="Thừa Thiên Huế">Thừa Thiên Huế </option>
                    <option value="Tiền Giang">Tiền Giang</option>
                    <option value="Trà Vinh">Trà Vinh</option>
                    <option value="Tuyên Quang">Tuyên Quang</option>
                    <option value="Vĩnh Long">Vĩnh Long</option>
                    <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                    <option value="Yên Bái">Yên Bái</option>
                    <option value="Phú Yên">Phú Yên</option>
                    <option value="Tp.Cần Thơ">Tp.Cần Thơ</option>
                    <option value="Tp.Đà Nẵng">Tp.Đà Nẵng</option>
                    <option value="Tp.Hải Phòng">Tp.Hải Phòng</option>
                    <option value="Tp.Hà Nội">Tp.Hà Nội</option>
                    <option value="TP  HCM">TP HCM</option>
                  </select>
                </div>
              </div>
              <div className="input-group mb-3">
                <div className="col-md-3">
                  <label className="form-label">Quận / Huyện</label>
                </div>
                <div className="col-md-9">
                  <select
                    {...register("district")}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="">Chọn Quận / Huyện</option>
                    <option value="Quận 1">Quận 1</option>
                    <option value="Quận 2">Quận 2</option>
                    <option value="Quận 3">Quận 3</option>
                    <option value="Quận 4">Quận 4</option>
                    <option value="Quận 5">Quận 5</option>
                    <option value="Quận 1">Quận 6</option>
                    <option value="Quận 1">Quận 7</option>
                    <option value="Quận 1">Quận 8</option>
                    <option value="Quận 1">Quận 9</option>
                    <option value="Quận 1">Quận 10</option>
                    <option value="Quận 1">Quận 11</option>
                    <option value="Quận 1">Quận 12</option>
                  </select>
                </div>
              </div>
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
                  <label className="form-label">Diện Tích</label>
                </div>
                <div className="col-md-9">
                  <input
                    {...register("scale")}
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
                  <label className="form-label">Số Lượng Phòng Ngủ</label>
                </div>
                <div className="col-md-9">
                  <input
                    {...register("rooms")}
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
                  <label className="form-label">Dịch Vụ</label>
                </div>
                <div className="col-md-9">
                  <input
                    {...register("service")}
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
                  <label className="form-label">Giá Bán</label>
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

export default AddProperty;
