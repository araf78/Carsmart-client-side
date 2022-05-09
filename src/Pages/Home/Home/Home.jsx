import React from "react";
import Inventory from "../../Inventory/Inventory";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div
        className=""
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://demo.cmssuperheroes.com/themeforest/autosmart/wp-content/uploads/2017/08/Ford-Mustang-Shelby-GT350R.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>HATCHBACK CAR</h5>
              <p>Viewing all recently added vehicles. Start your buy now.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://demo.cmssuperheroes.com/themeforest/autosmart/wp-content/uploads/2017/07/McLaren-675LT-2.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Ford Mustang Shelby </h5>
              <p>Viewing all recently added vehicles. Start your buy now.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://demo.cmssuperheroes.com/themeforest/autosmart/wp-content/uploads/2017/08/vw_golf.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Jaguar XJR</h5>
              <p>Viewing all recently added vehicles. Start your buy now.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* inventory items  */}
      <div>
        <h2 className="fs-1 mt-5 fw-bold text-danger">Inventory</h2>
        <Inventory></Inventory>
      </div>
      <div>
        <h2 className="fs-1 mt-5 mb-4 fw-bold text-danger">Popular Reviews</h2>
        <Reviews></Reviews>
      </div>
      <div>
        <h1 className="mt-5 fw-bold">Theme Core <span className="features">Features</span></h1>
        <CoreFeatures></CoreFeatures>
      </div>
    </div>
  );
};

export default Home;
