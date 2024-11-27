import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/NavBar";

export default function Root() {
  return (
    <>
      <Helmet>
        <title>Career Compass</title>
      </Helmet>
      <nav className="m-auto bg-primaryColor text-white">
        <NavBar />
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
