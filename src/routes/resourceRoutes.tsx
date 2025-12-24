import { Route } from "react-router-dom";
import Documentation from "../pages/resources/Documentation";
import HelpCenter from "../pages/resources/HelpCenter";
import Community from "../pages/resources/Community";
import Webinars from "../pages/resources/Webinars";

export const resourceRoutes = (
    <>
        <Route path="/docs" element={<Documentation />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/community" element={<Community />} />
        <Route path="/webinars" element={<Webinars />} />
    </>
);
