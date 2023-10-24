import React from "react";

function Vacation() {
  return (
    <div>
      {/* <!-- vacation section --> */}
      <div className="vacation bg-gradient-vacation">
        <div className="container pb-sm-5 pb-3">
          <div className="row row-cols-1 row-cols-md-3 mb-4 gy-5">
            <div className="col ">
              <div className="card bg-transparent border-0">
                <div className="image-1 position-relative">
                  <img
                    src="img/variations.png"
                    className="card-img-top"
                    alt="img/variations.png"
                  />
                  <div className="price position-absolute bottom-0 start-0  text-light shadow ">
                    <div className="value position-absolute bottom-0 start-0 p-2">
                      <h2 className="h1 fw-semibold mb-0"> $100 </h2>
                      <p>PER PERSON</p>
                    </div>
                    <div className="triangle-right position-static "></div>
                  </div>
                </div>
                <div className="card-body ">
                  <h5 className="card-title fw-bold my-3">
                    Motorcycle Expeditions
                  </h5>
                  <p className="card-text fw-semibold text-secondary ">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              <button className="btn btn-danger rounded-5 mt-4 ms-3 text-uppercase fw-semibold">
                book now
              </button>
            </div>
            <div className="col">
              <div className="card  bg-transparent border-0">
                <div className="image-1 position-relative">
                  <img
                    src="img/variations.png"
                    className="card-img-top  "
                    alt="img/variations.png"
                  />
                  <div className="price position-absolute bottom-0 start-0  text-light shadow ">
                    <div className="value position-absolute bottom-0 start-0 p-2">
                      <h2 className="h1 fw-semibold mb-0"> $100 </h2>
                      <p>PER PERSON</p>
                    </div>
                    <div className="triangle-right position-static "></div>
                  </div>
                </div>
                <div className="card-body ">
                  <h5 className="card-title fw-bold my-3">
                    Motorcycle Expeditions
                  </h5>
                  <p className="card-text fw-semibold text-secondary ">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              <button className="btn btn-danger rounded-5 mt-4 ms-3 text-uppercase fw-semibold">
                book now
              </button>
            </div>
            <div className="col">
              <div className="card bg-transparent border-0">
                <div className="image-1 position-relative">
                  <img
                    src="img/variations.png"
                    className="card-img-top  "
                    alt="img/variations.png"
                  />
                  <div className="price position-absolute bottom-0 start-0  text-light shadow ">
                    <div className="value position-absolute bottom-0 start-0 p-2">
                      <h2 className="h1 fw-semibold mb-0"> $100 </h2>
                      <p>PER PERSON</p>
                    </div>
                    <div className="triangle-right position-static"></div>
                  </div>
                </div>
                <div className="card-body ">
                  <h5 className="card-title fw-bold my-3">
                    Motorcycle Expeditions
                  </h5>
                  <p className="card-text fw-semibold text-secondary ">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
              <button className="btn btn-danger rounded-5 mt-4 ms-3 text-uppercase fw-semibold">
                book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vacation;
