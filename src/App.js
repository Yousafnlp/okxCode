import Routers from "./layouts/Routers";
import { Route } from "react-router-dom";

/*  =========== pages ======== */
import Home from "./pages/home"
/*  ===========End pages ======== */
function App() {
  return (
    <>
      <Routers>
          <Route path="/" element={ <Home/> }/>
      </Routers>
    </>
  );
}

export default App;
