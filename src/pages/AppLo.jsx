import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const AppLo = () => {
  return (
    <>
      <Header />
      <div className="main">{<Outlet />}</div>
      <Footer />
    </>
  );
};
export default AppLo;
