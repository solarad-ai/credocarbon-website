import { Route } from "react-router-dom";
import TermsOfService from "../pages/legal/TermsOfService";
import PrivacyPolicy from "../pages/legal/PrivacyPolicy";
import CookiePolicy from "../pages/legal/CookiePolicy";
import Compliance from "../pages/legal/Compliance";

export const legalRoutes = (
    <>
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/compliance" element={<Compliance />} />
    </>
);
