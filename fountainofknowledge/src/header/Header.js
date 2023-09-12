import "../header/Header.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="main">
      <div className="header1-1">
        <div>
          <p>Company Name</p>
        </div>
        <div>
          <p>Address</p>
        </div>
      </div>
      <div className="header1-2">
        <div>
          <img alt="Company Logo Here"></img>
        </div>
        <div>
          <h1>Company Name</h1>
        </div>
      </div>
      <div className="nav">
        <NavBar></NavBar>
      </div>
    </div>
  );
};

export default Header;
