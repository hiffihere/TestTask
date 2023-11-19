import React from "react";
import "./HeroSection.css"; // Import your CSS file for styling
import image from "../Hero/png-girl-1.png";
import imagedot from "../Hero/pngwing-8.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="Heropart">
          <div className="heading-p">
            <h1>
              Welcome to Our Literature <br />
              Review Services!{" "}
            </h1>
          </div>
          <div className="h-paragraph">
            <p>
              Embark on a journey to academic excellence with our <br />
              specialized literature review services, meticulously <br />{" "}
              crafted for students, researchers, and academic <br />{" "}
              professionals.
            </p>

            <div className="container">
              <div className="heading-section">
                <span className="main-heading">Do Not Trust Us; Test Us</span>
                <span className="secondary-heading">
                  (£6.99/Page For Everyone)
                </span>
              </div>

              <div className="input-section">
                <span className="input-heading">Academic Level</span>
                <input type="text" className="input-box" placeholder="Any" />
              </div>

              <div className="input-section">
                <span className="input-heading">Deadline</span>
                <input type="text" className="input-box" placeholder="Any" />
              </div>

              <div className="group-32">
                <div className="text-wrapper-41">Number of pages</div>
                <div className="pages-section">
                  <div className="text-wrapper-42">-</div>
                  <div className="group-33">
                    <div className="overlap-group-8">
                      <div className="text-wrapper-44">1</div>
                    </div>
                  </div>
                  <div className="text-wrapper-43">+</div>
                </div>
              </div>

              <div className="group-34">
                <div className="overlap-12">
                  <div className="group-35">
                    <div className="overlap-group-9">
                      <p className="text-wrapper-45">Total Price</p>
                    </div>
                  </div>
                </div>

                <div className="group-36">
                  <div className="overlap-13">
                    <p className="text-wrapper-46">6.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="picture">
            <img src={image} alt="image" className="girl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
