import React from "react";

function Header() {
  return (
    <div>
      {/* <!-- navbar --> */}
      <nav className="navbar text-center fixed-top navbar-expand-lg  ">
        <div className="container-fluid ">
          <a className="navbar-brand fw-bold" href="#">
            <img className="text-black w-75" src="img/logo.png" alt="logo" />
          </a>

          <button
            className="navbar-toggler ham bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsingNavbar3"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse  text-black w-100"
            id="collapsingNavbar3"
          >
            <ul className="navbar-nav fw-semibold text-uppercase w-100 justify-content-end ">
              <li className="nav-item  mx-lg-2">
                <a className="nav-link white bg-red" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link mx-lg-2 ::before white bg-red" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link mx-lg-2 white bg-red" href="#motorcycles">
                  motorcycles
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link mx-lg-2 white bg-red" href="#guided-section">
                  rentals
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link mx-lg-2 white bg-red" href="#travel-blog">
                  blog
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link mx-lg-2 white bg-red" href="#contact">
                  contact
                </a>
              </li>
              <li className="nav-item  m-0 bg-red">
                <div className="icon text-center d-inline-flex">
                  <a className="nav-link mx-2 " href="#">
                    <i className="fa-brands fa-facebook-f white bor"></i>
                  </a>
                  <a className="nav-link mx-2 border-3 border-primary" href="#">
                    <i className="fa-brands fa-instagram white bor1"></i>
                  </a>
                  <a className="nav-link mx-2 border-3 border-primary" href="#">
                    <i className="fa-brands fa-google white bor2"></i>
                  </a>
                  <a className="nav-link mx-2 border-3 border-primary" href="#">
                    <i className="fa-brands fa-youtube white bor3"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Home section --> */}
      <div className="wrapper">
        <div className="shape-red"></div>
        <div className="intro_text">
            <h1 className="intro_text1">2,500 tours in over 100 destinations</h1>
            <h1 className="intro_text2">and 36 years of experience !</h1>
        </div>
        <div className="bike_img">
            <img src="img/Duke.png  "/>
        </div>
    </div>
    </div>
  );
}

export default Header;
