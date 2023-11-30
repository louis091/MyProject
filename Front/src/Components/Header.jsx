import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <>
      <header className="header-upper py-3 bg-slate-800">
        <div className="container-fluid">
          <div className="row align-items-center gap-15 left-10">
            <div className="col-2">
              <Link to="/">
                <h3 className="text-white font-bold text-4xl">HUMILITY</h3>
              </Link>
            </div>
            <div className="col-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Products"
                />
                <span
                  className="input-group-text bg-amber-500"
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-6 py-3">
              <div className="header-upper-links d-flex align-items-center px-10 gap-10">
                <div>
                  <Link to="/add-property" className="gap-3 text-white">
                    <p className="mb-0">Add Property</p>
                  </Link>
                </div>
                <div>
                  <Link to="/add-contract" className="gap-3 text-white">
                    <p className="mb-0">Add Contract</p>
                  </Link>
                </div>
                <div>
                  <Link to="/contract" className="gap-3 text-white">
                    <p className="mb-0">View Contract</p>
                  </Link>
                </div>
                <div>
                  <Link to="/property" className="gap-3 text-white">
                    <p className="mb-0">View Property</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-1 bg-black">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="menu-bottom d-flex flex-wrap align-items-center">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span className="me-20 d-inline-block ">Categories</span>
                    </button>
                    <ul
                      className="dropdown-menu bg-red-900"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link
                          className="dropdown-item hover:bg-slate-800 text-white"
                          to=""
                        >
                          Computers & Laptop
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item hover:bg-slate-800 text-white"
                          to=""
                        >
                          Cameras & Videos
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item hover:bg-slate-800 text-white"
                          to=""
                        >
                          Smart Television
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item hover:bg-slate-800 text-white"
                          to=""
                        >
                          Smart Watches
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item hover:bg-slate-800 text-white"
                          to=""
                        >
                          Home Applicanes
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item hover:bg-slate-800 text-white"
                          to=""
                        >
                          Mobiles & Tablets
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item hover:bg-slate-800 text-white"
                          to=""
                        >
                          Headphones
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item hover:bg-slate-800 text-white"
                          to=""
                        >
                          Accessories
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="flex text-white gap-16">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/">VAN LANG</NavLink>
                    <NavLink to="/">BLOGS</NavLink>
                    <NavLink to="/contact">ABOUT US</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
