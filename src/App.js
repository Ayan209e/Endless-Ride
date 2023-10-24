import Header from "./Header";
import Vacation from "./Vacation";
import Destination from "./Destination";
import Jacket from "./Jacket";
import Guided from "./Guided";
import TravelBlog from "./TravelBlog";
import Journey from "./Journey";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      {/* Header Section */}
      <Header></Header>

      {/* Vacation Section */}
      <Vacation></Vacation>

      {/* Destination Section */}
      <Destination></Destination>

      {/* Jacket Section */}
      <Jacket></Jacket>

      {/* Guided Section */}
      <Guided></Guided>

      {/* Travel Blog */}
      <TravelBlog></TravelBlog>

      {/* Start Your Own Journey */}
      <Journey></Journey>

      {/* Contact Section */}
      <Contact></Contact>

      {/* Footer Section */}
      <Footer></Footer>

      {/* <!-- Back to top button --> */}
      <button
        type="button"
        className="btn btn-danger btn-floating btn-shadow btn-lg "
        id="btn-back-to-top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}

export default App;
