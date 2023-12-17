import React from "react";

function OkxDetails() {
  return (
    <section className=" custom-container mint-area mint-area-shadow">
      <div>
        <div className=" px-3 px-lg-5 px-md-4 d-flex justify-content-center align-items-center gap-3 pt-5 pt-sm-5 pt-lg-3 pt-md-3   flex-wrap">
          <div className="detailess-width">
            <div className="banner-content banner-btn pl-20 pr-10">
              <h3
                className="wow fadeInLeft"
                data-wow-delay="0.3s"
                data-wow-duration="1s"
              >
                Mint a NFT
              </h3>
              <p>
                and get a random skin or sword. Mint more to get better chance.
              </p>
              <h3
                className="wow fadeInLeft"
                data-wow-delay="0.4s"
                data-wow-duration="1s"
              >
                Utility
              </h3>
              <p>Ranking points for better earning and access to Play2Earn</p>
              <a
                className="wow fadeInLeft white-btnd btnd g-hover"
                data-wow-delay="0.5s"
                data-wow-duration="1s"
                href=" #"
                style={{ width: "272px" }}
              >
                MINT SOON
              </a>
              <div className="banner-btn band_btn mt-10">
                <ul>
                  <li>
                    Supported By:{" "}
                    <img src="assets/img/images/okx.png" alt="logo" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ width: "752px" }}>
            <img
              src="assets/img/images/mint.png"
              alt=""
              data-wow-delay="0.5s"
              data-wow-duration="1s"
              className="wow fadeInRight"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OkxDetails;
