import React from "react";

function Video() {
  return (
    <section className="video-area">
      <div className="container">
        {/* <video loop autoplay muted className="katana-video">
			<source src="assets/video/SwordLobby_v3_7.mp4" type="video/mp4"/>
		</video> */}
        <video
          id="fullscreen-video"
          src="assets/video/SwordLobby_v3_7.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </section>
  );
}

export default Video;
