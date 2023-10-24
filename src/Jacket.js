import React from "react";

function Jacket() {
  return (
    <div>
      {/* <!--/////--  jacket-section --//////--> */}
      <div className="jacket-section bg-gradient-vacation " id="jacket">
        <div className="container pt-sm-5">
          <div className="text-center mt-5">
            <h2 className="h2 fw-bolder">WE ARE WORLD WIDE</h2>
            <p className="card-text fw-semibold text-secondary mt-1 w-75 d-inline-block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              laborum omnis, reiciendis fuga dolor quisquam. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Voluptatibus, quia.
            </p>
          </div>

          <div className="row">
            <div className="col-sm-6 ">
              <div className="card border-0 p-5 mt-5 ">
                <div className="d-flex g-4 align-items-center">
                  <div className="col  text-end">
                    <img
                      src="img/men-icon1.png"
                      className="img-fluid  rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col ">
                    <div className="card-body">
                      <h5 className="card-title fw-bolder h4 ">ALEX DOE </h5>
                      <small className="text-muted  text-end">
                        MAIN RIDER{" "}
                      </small>
                    </div>
                  </div>
                </div>
                <p className=" mt-3 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  rem neque minima sapiente animi, repudiandae doloribus
                  provident eveniet culpa cupiditate et esse sit adipisci!
                  Beatae. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Eos harum error qui repudiandae sit ea!
                </p>
              </div>
            </div>

            <div className="col-sm-6 text-center  mt-5">
              <img src="img/jacket.png" className="img-fluid w-50" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jacket;
