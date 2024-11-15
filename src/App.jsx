import Routes from "./Routes/Routes";
import Scroll from "./ScrollToTop/Scroll";
import { BrowserRouter } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Scroll />
      <Routes />
      {/* <ToastContainer/> */}
    </BrowserRouter>
  );
}

export default App;
