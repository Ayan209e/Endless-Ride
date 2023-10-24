import React from "react";

function Guided() {
  return (
    <div>
      {/* <!--/////--  guided-section --//////--> */}
      <div className="guided text-white" id="guided-section">
        <div className="text-center py-5 w-50 m-auto">
          <h2>GUIDED MOTORCYCEL TOURS SINCH 1880.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            cupiditate expedita temporibus corrupti non doloremque!
          </p>
        </div>

        <div className="bg-outer-guide ">
          <div className="container d-flex">
            <div className="row">
              <div className="col-sm-5 col text-center p-5 ">
                <div className="row align-items-center py-5">
                  <div className="col ">
                    <h2 className="fw-bold mb-0">
                      1000<small className="fw-lighter fs-6 small">KM</small>
                    </h2>
                    <p>2DAYS</p>
                  </div>
                  <div className="col ">
                    <h2 className="display-3 fw-bold mb-0">
                      3000<small className="fw-lighter fs-6 small">KM</small>
                    </h2>
                    <p>7DAYS</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  totam iste optio quaerat accusantium ea numquam quae officiis
                  cupiditate aliquid?
                </p>
              </div>
              <div className="col-sm-2 cole bottom-0">
                <img src="img/bike3.png" className="img-fluid bike3" alt="" />
              </div>
              <div className="col-sm-5 col text-center p-5 ">
                <div className="row align-items-center py-5">
                  <div className="col">
                    <h2 className="fw-bold display-3 mb-0">50+ </h2>
                    <p>COUNTRIES</p>
                  </div>
                  <div className="col">
                    <h2 className="fw-bold mb-0">
                      1000<small className="fw-lighter fs-6 small">KM</small>
                    </h2>
                    <p>2DAYS</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  totam iste optio quaerat accusantium ea numquam quae officiis
                  cupiditate aliquid?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guided;
