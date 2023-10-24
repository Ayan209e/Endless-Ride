import React from "react";

function Contact() {
  return (
    <div>
      {/* <!--/////--  contact-section --//////--> */}
      <div className="bg-gray">
        <div className="contact text-center py-5 " id="contact">
          <div className="container mt-sm-5">
            <div className="row text-center mb-sm-4">
              <div className="col-sm-4 ">
                <div className="d-flex ">
                  <div className="icon mx-4 display-5">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="text lh-sm text-start">
                    <h3>Email</h3>
                    <p>
                      free@gmail.com <br /> free@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="d-flex ">
                  <div className="icon mx-4 display-5">
                    <i className="bi bi-phone"></i>
                  </div>
                  <div className="text lh-sm text-start">
                    <h3>phone</h3>
                    <p>
                      {" "}
                      1233 1233 1233 <br /> 1233 1233 1233
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="d-flex ">
                  <div className="icon mx-4 display-5">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="text lh-sm text-start">
                    <h3>Address</h3>
                    <p>123, Main Road, New City, My Country 123456</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="social-media-link  mt-4 mt-lg-0 ">
                <ul className="list-unstyled d-flex justify-content-center text-center">
                  <li>
                    <a href="#">
                      {" "}
                      <i className="bi-facebook border-5 p-sm-3 display-6 text-secondary mx-3 rounded-circle border-danger"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="bi-linkedin border-5 p-sm-3 display-6 text-secondary mx-3 rounded-circle border-danger"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="bi-google border-5 p-sm-3 display-6 text-secondary mx-3 rounded-circle border-danger"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="bi-instagram border-5 p-sm-3 display-6 text-secondary mx-3 rounded-circle border-danger"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="bi-youtube border-5 p-sm-3 d-none d-sm-inline display-6 text-secondary mx-3 rounded-circle border-danger"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="bi-youtube border-5 p-sm-3 d-none d-sm-inline display-6 text-secondary mx-3 rounded-circle border-danger"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="bi-youtube border-5 p-sm-3 d-none d-sm-inline display-6 text-secondary mx-3 rounded-circle border-danger"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
