import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Fotter from "./Fotter"; // Note: ensure the file name matches your "Fotter" spelling!

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Fixed Navigation Bar */}
      <NavBar />
      

      <main className="flex-grow pt-28 md:pt-32 px-4 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Fotter />
    </div>
  );
};

export default MainLayout;