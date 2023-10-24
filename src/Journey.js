import React from "react";

function Journey() {
  return (
    <div>
      {/* <!--/////--  start-journey-section --//////--> */}
      <div className="start-jurney bg-image text-white" id="start-jurney">
        <div className="text-center py-5 w-75 m-auto ">
          <h2 className="h2 fw-bolder">START YOUR JOURNEY</h2>
          <p className="card-text fw-semibold text-secondary mt-1 w-75 d-inline-block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            laborum omnis, reiciendis fuga dolor quisquam. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Voluptatibus, quia.
          </p>
        </div>

        <div className="text-center map-icon bottom-5 ">
          <img src="img/map-icon.png" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Journey;
