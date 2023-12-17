import React from "react";

function Whitelist() {
  return (

    <section className="whitelist-area ">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-9  col-md-8 col-sm-11">
           

            {/* <!-- The Modal --> */}
            <div className="modal fade " id="myModal">
              <div className="modal-dialog">
                <div className="modal-content" style={{minWidth: "300px"}}>
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header" style={{border: "1px solid "}}>
                    <a
                      href=" #"
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                    > 
                      &times;
                    </a>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="form_wrapper">
                    <div className="form_container">
                      <div className="title_container">
                        <h2>GET WHITELISTED NOW!</h2>
                        <p>
                          you need to provide email address and your social
                          media to be whitelisted.
                        </p>
                      </div>
                      <div className="row clearfix">
                        <div className="">
                          <form>
                            <div className="input_field">
                              {" "}
                              <span>
                                <i
                                  aria-hidden="true"
                                  className="fa fa-envelope"
                                ></i>
                              </span>
                              <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                              />
                            </div>
                            <div className="row clearfix">
                              <div className="col_half">
                                <div className="input_field">
                                  {" "}
                                  <span>
                                    <i className="fa-brands fa-twitter"></i>
                                  </span>
                                  <input
                                    type="text"
                                    name="text"
                                    placeholder="Twitter"
                                  />
                                </div>
                              </div>
                              <div className="col_half">
                                <div className="input_field">
                                  {" "}
                                  <span>
                                    <i className="fa-brands fa-discord"></i>
                                  </span>
                                  <input
                                    type="text"
                                    name="text"
                                    placeholder="Discord"
                                    required
                                  />
                                </div>
                              </div>
                              <p className="white">
                                Just a limited amount of people will be picked
                                and added to the whitelist.
                              </p>

                              <p className="white">
                                You will be notified via e-mail.
                              </p>
                            </div>
                            <input
                              className="button"
                              type="submit"
                              value="Submit"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whitelist;
