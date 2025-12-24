import { Route } from "react-router-dom";
import Features from "../pages/product/Features";
import Pricing from "../pages/product/Pricing";
import RegistriesPage from "../pages/product/RegistriesPage";
import API from "../pages/product/API";

export const productRoutes = (
    <>
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/registries" element={<RegistriesPage />} />
        <Route path="/api" element={<API />} />
    </>
);
