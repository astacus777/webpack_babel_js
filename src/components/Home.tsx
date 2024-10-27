import PICTURE from "../img/pic1.png";
import PIC1 from "../img/caru1.jpg";
import SEA from "../img/sea.jpg"
import SEA1 from "../img/sea1.jpg"
import SEA2 from "../img/sea2.jpg"
import "../css/styles.css";

export const Home = () => {
    const now = new Date().toString();
  return (
    <>
      <div className="container-home">
        <div className="timer">{now}</div>
        <div
          id="carouselExampleControls"
          className="carousel slide " 
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={SEA} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={SEA1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={SEA2} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
