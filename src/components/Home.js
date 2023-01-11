import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import About from "./About";

// let imgs = [
//   "https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg",
//   "https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg",
// ];
// console.log("testing",imgs.json);

function Home() {
  return (
    <>
      <div className="Home pb-5">
        <AwesomeSlider className="">
          <div>
            <img src={require("../assets/images/3.gif")} alt="3" />
          </div>
          <div>
            <img
              src={require("../assets/images/banner-3.jpg")}
              alt="banner-3"
            />
          </div>
          <div>
            <img src={require("../assets/images/3.gif")} alt="banner-2" />
          </div>
          <div>
            <img src={require("../assets/images/3.gif")} alt="banner-1" />
          </div>
        </AwesomeSlider>
      </div>
      <About />
    </>
  );
}

export default Home;
