import React, { useState } from "react";
import bgimage from "../mintims/telegram-cloud-document-4-5900135907549253113 1.jpg";
// import x35 from "../asstes/_x35__copy.png";
// import okx from "../asstes/Group 40701.png";
// import okx from "../asstes/Group 40701.png";

// import bgdiv from "../asstes/Rectangle 3963.png";
import "./styles.css";

const Mint = () => {
  const [count, setCount] = useState(3);
  return (
    <div
      className="mint-bg bordermy text-white d-flex character-area-shadow flex-column align-items-center custom-container px-3 px-lg-5 px-md-5"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        paddingBottom: "40px",
        boxShadow:
          "rgb(0 0 0 / 100%) 45px 0px 18px -27px inset,rgb(0 0 0 / 80%) -12px 0px 8px -4px inset",
        // height: "70vh",
        // borderTop: "1px solid green",
      }}
    >


      <div className="main-line"></div>
      <h1 className="mint-here khand fw-bold pt-5">MINT HERE</h1>
      <p className="px-3 jost text-center mint-p">
        In this lootbox, you will mint 1 random NFT of character or sword.
      </p>
      <div className="position-relative lb-w  mb-3 mb-md-5">
        <div className="position-absolute background-div"></div>
        <div className="lootbox  flex-column">
          <div className="d-flex gap-3 justify-content-center align-items-center">
            {/* <img src={x35} alt="Not found" /> */}
            <h2 className="khand lb-head fw-bold">OKXB LOOTBOX</h2>
          </div>{" "}
          <hr />
          <div>
            <p className="total jost">Total available (Sold/Total)</p>
            <div className="d-flex gap-4 justify-content-between">
              <h4 className="jost text-my-w">
                <span className="mint-here jost ">0000</span>/6000
              </h4>
              <input
                type="range"
                className="custom-range"
                min="0"
                max="6000"
                step="1"
              />
            </div>
          </div>
          <hr />
          <div>
            <div className="d-flex justify-content-between jost">
              <h4 className="text-my-w fw-5">
                <span className="mint-here fw-6">Price</span>/Mint
              </h4>
              <h4 className="text-my-w fw-5">
                <span className="mint-here fw-6">$10</span>/Mint
              </h4>
            </div>
            <p className="total">Total available (Sold/Total)</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center jost">
            <p className="text-my-w m-0 align-items-center">Chain</p>
            <div className="d-flex gap-3">
              {/* <img src={okx} alt="Not found" className="h-25 mt-1" /> */}
              <p className="m-0 okbchain-button">OKB Chain</p>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-center gap-4">
            <div className="count d-flex justify-content-center align-items-center gap-1 px-3 jost">
              <button
                onClick={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                }}
                className="count-btn fw-bold"
                style={{
                  border: "none",
                  fontSize: "30px",
                  marginBottom: "2px",
                }}
              >
                -
              </button>
              <span className="mint-here fw-bold">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="bg-black text-white fw-bold"
                style={{ border: "none" }}
              >
                +
              </button>
            </div>
            <button className="mint-button px-4 fw-bold jost">MINT NOW</button>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center flex-column flex-sm-row">
            <button className="mint-here salebtn fw-bold bg-black  jost ">
              PUBLIC SALE
            </button>
            <div className="jost mt-2 mt-sm-0">
              <span className="mint-here">PRICE:</span>0.040 ETH <br />
              <span className="mint-here">LIMIT:</span>75 NFTS
            </div>
          </div>
        </div>
      </div>

      <div className="main-line"></div>
    </div>

  );
};

export default Mint;
