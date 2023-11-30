import React from "react";

function Footer() {
  return (
    <>
      <footer className="py-4 bg-slate-800">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getDate()}; Powered by Louis Pham
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
