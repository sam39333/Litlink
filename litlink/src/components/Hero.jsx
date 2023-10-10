import "./Header.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to="categories/furnitures">
                <div id="img1" className="lil-overlay"></div>
                <img
                  src={
                    "https://th.bing.com/th/id/R.e4b19e3a2e29c868ff184e0ea8ad9fce?rik=gkSozAjb6v4CdQ&riu=http%3a%2f%2fcdn.home-designing.com%2fwp-content%2fuploads%2f2017%2f03%2fgrey-and-black-and-white-living-room-model-portraits-overhanging-lights-wooden-chairs-simple-white-coffee-table-geomtric-flooring-and-ceiling-fireplace.jpg&ehk=zf1z89lygqB8lHnyshz%2fMjUaYByUk3y9OuwnIpMmvqI%3d&risl=&pid=ImgRaw&r=0"
                  }
                  alt="img1"
                />
                <p className="main-description">Live Comfortably</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="categories/skin-care">
                <div id="img2" className="lil-overlay"></div>
                <img
                  src={
                    "https://i.pinimg.com/originals/45/0d/ef/450defe751c32eaf53259e6b71446935.jpg"
                  }
                  alt="img2"
                />
                <p className="main-description">Skincare</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="categories/kitchen">
                <div id="img3" className="lil-overlay"></div>
                <img
                  src={
                    "https://i.pinimg.com/originals/0b/a4/59/0ba459c82b3d0c7e527804b8778494c2.jpg"
                  }
                  alt="img3"
                />
                <p className="main-description">Kitchen</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="categories/electronics">
                <div id="img4" className="lil-overlay"></div>
                <img
                  src={
                    "https://i.pinimg.com/originals/8f/a8/a3/8fa8a399d94868b4447dbb5de15404ad.jpg"
                  }
                  alt="img4"
                />
                <p className="main-description">Electronics</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
