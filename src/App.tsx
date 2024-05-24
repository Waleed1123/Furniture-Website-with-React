import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        {/* Navbar Upper Box HTML */}
        <div className="navbar-box">
          <p>25% off - shop now or regret later</p>
        </div>
        {/* Navbar Starts Here */}
        <div className="navbar">
          <div className="logo">
            <h3>furniLux</h3>
          </div>
          <div className="nav-icon">
            <ul>
              <li>Home</li>
              <li>Categories</li>
              <li>About Us</li>
              <li>Pages</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="nav-btn">
            <button>Log in</button>
            <button className="signup">Sign up</button>
          </div>
        </div>
        {/* Heropart Starts here */}
        <div className="hero">
          <h2>
            FurniLux - Your Brand <br /> for Stylish Living
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            esse vero eligendi, <br /> tenetur obcaecati quas?Lorem ipsum dolor
            sit amet.
          </p>
          <button>Shop Now </button>
        </div>
        {/* Hero Boxes */}
        <div className="box-container">
        
        </div>
      </div>
    </>
  );
}

export default App;
