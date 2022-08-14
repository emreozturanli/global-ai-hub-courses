import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import AllCourses from "../pages/allCourses/AllCourses";
import MyCourses from "../pages/myCourses/MyCourses";
import HomeRoute from "./HomeRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/all-courses" element={<AllCourses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;