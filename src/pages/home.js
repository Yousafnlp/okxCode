import MainLayout from "../layouts/MainLayout";
import Banner from "../components/Banner";
import Brand from "../components/Brand";
import Nft from "../components/Nft";
import OkxDetails from "../components/OkxDetails";
import Mint from "../components/Mint";
import Video from "../components/Video";
// import '../.'
import Whitelist from "../components/Whitelist";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "1920px",
        
        justifyContent: "center",
        backgroundColor: "#000000",
      }}
    >
      <MainLayout>
        <Banner />
        <Brand />
        <Whitelist />
        <Nft />
        <OkxDetails />
        <Mint />
        <Video />
      </MainLayout>
    </div>
  );
};

export default Home;
