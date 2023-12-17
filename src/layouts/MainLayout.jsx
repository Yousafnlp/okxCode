import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ResponsiveHeaders from "../components/header/ResponsiveHeaders";
//import ScrollTop from "../components/ScrollTop"

const MainLayout = ({ children }) => {
  return (
    <div style={{ maxWidth: "1920px", width: "100%" }}>
      {/* <Preloader/> */}
      {/* <ScrollTop/> */}
   
   <ResponsiveHeaders/>
      <main className="main-area fix">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
