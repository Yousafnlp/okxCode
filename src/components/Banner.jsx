import React from 'react'

function Banner() {
	return (


		<section className=" home-four-slider">
			<div className="grd-bg">
				<div className="custom-container">
					<div className="row px-3 px-lg-5 px-md-4">
						<div className="col-xl-6 col-lg-7 col-md-11">
							<div className="banner-content banner-btn">
								<h1 className="wow fadeInLeft" data-wow-delay="0.3s" data-wow-duration="1s">OKX
								</h1>
								<h2 className="wow fadeInLeft" data-wow-delay="0.4s" data-wow-duration="1s">character
								</h2>
								<p>In <span className="banner-span">Katana Inu</span> game on <span className="banner-span">OKBChain</span> </p>
								<div className="banner-btn banner_wl mt-10">
									<button type="button" className="btnd4 mb-1 g-hover whitelist_btn " data-bs-toggle="modal" data-bs-target="#myModal">Whitelist Now

									
									</button>
								</div>

								{/* ;;;;;;;; */}
								<div className="banner-btn band_btn d-flex flex-wrap  gap-3 mt-10" style={{width: "max-content"}}>
								<div className="flex-col d-flex   gap-3 ">
									<a data-wow-delay="0.6s" data-wow-duration="1s" className="btnd g-hover wow fadeInLeft"
										href=" #"
										style={{textDecoration: "none"}}
										>Mint Soon
									</a>
								
									<a data-wow-delay="0.6s" data-wow-duration="1s" className="btnd g-hover wow fadeInLeft"
										href=" #"><img src="assets/img/images/opensea.png" alt="logo" />
									</a>
									</div>
								<div  className="flex-col d-flex   gap-3 ">
									<a data-wow-delay="0.6s" data-wow-duration="1s" className="btnd wow g-hover fadeInLeft"
										href=" #"><img src="assets/img/images/kainu.png" alt="logo" />
									</a>

									<a data-wow-delay="0.7s" data-wow-duration="1s" className="g-hover btnd wow fadeInLeft"
										href=" #"><img src="assets/img/images/okx.png" alt="logo" />
									</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>

		</section>
	)
}

export default Banner