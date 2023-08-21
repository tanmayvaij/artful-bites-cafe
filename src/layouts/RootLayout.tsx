import { Footer, Navbar } from "../components/Common";
import { navbarNavigationData } from "../data";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <Navbar data={navbarNavigationData} />
      <main className="py-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
