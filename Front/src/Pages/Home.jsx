import React from "react";
import { Link } from "react-router-dom";

const LogAPI = () => {
  obj = JSON.parse(PropertyAPI);
  console.log(obj);
};

function Home() {
  return (
    <>
      <section className="home-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  className="rounded-xl img-fluid mt-2 mb-1"
                  src="/main-banner.jpg"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPER SALES FOR HOUSES</h4>
                  <h5>LOS ANGELES</h5>
                  <p>From $999.00 or $60.62/ square.</p>
                  <div className="button-container py-3">
                    <Link className="button mt-9 bg-slate-800 ml-20 top-24 py-2 px-4 text-white">
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="flex flex-wrap py-2 gap-1">
                <div className="small-banner position-relative">
                  <img
                    className="rounded-xl img-fluid mt-1"
                    src="/small-banner.jpg"
                  />
                </div>
                <div className="small-banner position-relative">
                  <img
                    className="rounded-xl img-fluid mt-1"
                    src="/small-banner.jpg"
                  />
                </div>
                <div className="small-banner position-relative">
                  <img
                    className="rounded-xl img-fluid mt-1"
                    src="/small-banner.jpg"
                  />
                </div>
                <div className="small-banner position-relative">
                  <img
                    className="rounded-xl img-fluid mt-1"
                    src="/small-banner.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-fluid bg-slate-800">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15 py-5 px-3">
                  <div className="text-white">
                    <h6 className="fw-bold">Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div className="text-white">
                    <h6 className="fw-bold">Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div className="text-white">
                    <h6 className="fw-bold">Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div className="text-white">
                    <h6 className="fw-bold">Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div className="text-white">
                    <h6 className="fw-bold">Secured Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
