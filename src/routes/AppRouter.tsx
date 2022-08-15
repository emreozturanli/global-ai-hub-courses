import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import AllCourses from "../pages/AllCourses";
import MyCourses from "../pages/MyCourses";


function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MyCourses />} />
        <Route path="/all-courses" element={<AllCourses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;