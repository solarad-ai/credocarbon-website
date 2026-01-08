import { Route } from "react-router-dom";
import RegistryAdmin from "../pages/admin/RegistryAdmin";

export const adminRoutes = (
    <>
        <Route path="/admin/registry" element={<RegistryAdmin />} />
    </>
);
