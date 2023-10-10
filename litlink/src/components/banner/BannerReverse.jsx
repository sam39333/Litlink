import { Link } from "react-router-dom";
import "./Banner.css";

function BannerReverse({ title, text}) {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-container-reverse">
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
            <img
              src={
                "https://i.pinimg.com/originals/60/9d/4c/609d4ca861c75c0a041484335f957141.jpg"
              }
              alt="banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerReverse;
