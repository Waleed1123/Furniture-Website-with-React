import "./App.css";
import img from "./assets/hero-sofa.jpg"
export function App() {
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
        <div className="box-container">{/* Boxes */}</div>
        {/* Cards */}
        <div className="cards-paerent">
          <div className="card1 card">
            <img src="./assets/hero-sofa.jpg" alt="" />
            <span>
              <p className="color-icon"></p>
              <p className="shop-icon"></p>
            </span>
            <h4>Comfertable Sofa</h4>
            <h4>$80.99</h4>
          </div>
          <div className="card2 card">
            <img src="./assets/hero-sofa.jpg" alt="" />
            <span>
              <p className="color-icon"></p>
              <p className="shop-icon"></p>
            </span>
            <h4>Elegent Slide Sofa</h4>
            <h4>$80.99</h4>
          </div>
          <div className="card3 card">
            <img src="./assets/hero-sofa.jpg" alt="" />
            <span>
              <p className="color-icon"></p>
              <p className="shop-icon"></p>
            </span>
            <h4>Classy Padded Chair</h4>
            <h4>$80.99</h4>
          </div>
        </div>
        {/* Luxurious Bed Part */}

        <div className="luxurious-bed">
          <div className="bed-text">
            <h3>Luxurious Bed</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ad distinctio asperiores odio nostrum reiciendis, iusto <br /> voluptatibus deserunt at dignissimos quasi!</p>
            <p>$ 299</p>
            <p>Icons</p>
            <button>Buy Now</button>
          </div>
          <div className="bed-img">
            <img src={img} alt="" />
          </div>
        </div>

      
      
      </div>
    </>
  );
}

export default App;
