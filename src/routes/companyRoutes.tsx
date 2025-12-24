import { Route } from "react-router-dom";
import AboutUsPage from "../pages/company/AboutUsPage";
import Careers from "../pages/company/Careers";
import Blog from "../pages/company/Blog";
import Press from "../pages/company/Press";

export const companyRoutes = (
    <>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/press" element={<Press />} />
    </>
);
