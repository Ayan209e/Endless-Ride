import React from "react";

function TravelBlog() {
  return (
    <div>
      {/* <!--/////--  travel-blog-section --//////--> */}
      <div
        className="travel-blog bg-gradient-vacation pt-sm-5"
        id="travel-blog"
      >
        <div className="text-center py-sm-5 py-3 w-75 m-auto ">
          <h2 className="h2 fw-bolder">TRAVEL BLOG</h2>
          <p className="card-text fw-semibold text-secondary mt-1 w-75 d-inline-block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            laborum omnis, reiciendis fuga dolor quisquam. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Voluptatibus, quia.
          </p>
        </div>

        <div className=" container pb-sm-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col ">
              <div className="card  bg-transparent border-0">
                <div className="image-1 position-relative">
                  <img
                    src="img/variations.png"
                    className="card-img-top"
                    alt="img/variations.png"
                  />
                  <div className="price position-absolute bottom-0 start-0  text-light shadow ">
                    <div className="position-absolute bottom-0 start-0 p-2">
                      <h2 className="h1 fw-semibold mb-0"> SOUTH EAST </h2>
                      <p>20 MAY 2020</p>
                    </div>
                    <div className="triangle-right"></div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold my-3">
                    10 reasons why USA should be on your bucket list.
                  </h5>
                  <p className="card-text text-secondary ">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional.
                  </p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card  bg-transparent border-0">
                <div className="image-1 position-relative">
                  <img
                    src="img/variations.png"
                    className="card-img-top"
                    alt="img/variations.png"
                  />
                  <div className="price position-absolute bottom-0 start-0  text-light shadow ">
                    <div className="position-absolute bottom-0 start-0 p-2">
                      <h2 className="h1 fw-semibold mb-0"> USA </h2>
                      <p>20 MAY 2020</p>
                    </div>
                    <div className="triangle-right"></div>
                  </div>
                </div>
                <div className="card-body ">
                  <h5 className="card-title fw-bold my-3">
                    10 reasons why USA should be on your bucket list.
                  </h5>
                  <p className="card-text text-secondary ">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional.
                  </p>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card bg-transparent  border-0">
                <div className="image-1 position-relative">
                  <img
                    src="img/variations.png"
                    className="card-img-top"
                    alt="img/variations.png"
                  />
                  <div className="price position-absolute bottom-0 start-0  text-light shadow ">
                    <div className="position-absolute bottom-0 start-0 p-2">
                      <h2 className="h1 fw-semibold mb-0">BRAZIL</h2>
                      <p>20 MAY 2020</p>
                    </div>
                    <div className="triangle-right"></div>
                  </div>
                </div>
                <div className="card-body ">
                  <h5 className="card-title fw-bold my-3">
                    10 reasons why USA should be on your bucket list.
                  </h5>
                  <p className="card-text text-secondary ">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelBlog;
