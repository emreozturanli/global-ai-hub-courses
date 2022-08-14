import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import AllCourses from "../pages/allCourses/AllCourses";
import MyCourses from "../pages/myCourses/MyCourses";
import PrivateRoute from "./PrivateRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/my-courses" element={<MyCourses />} />
          </Route>
          <Route path="/all-courses" element={<AllCourses />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;