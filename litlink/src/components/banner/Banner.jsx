import { Link } from "react-router-dom";
import "./Banner.css";

function Banner({ title, text }) {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-container">
          <div className="text-side">
            <div className="text">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="categories/all">
                <button>Shop now</button>
              </Link>
            </div>
          </div>
          <div className="img-side">
            <img src={"https://i.pinimg.com/originals/79/9d/08/799d08eb898de4c64822a2e26d4ef4a9.png"} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
