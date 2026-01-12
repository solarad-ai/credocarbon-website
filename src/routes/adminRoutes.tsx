import { Route } from "react-router-dom";
import RegistryAdmin from "../pages/admin/RegistryAdmin";
import SuperAdmin from "../pages/admin/SuperAdmin";

export const adminRoutes = (
    <>
        <Route path="/admin/registry" element={<RegistryAdmin />} />
        <Route path="/superadmin" element={<SuperAdmin />} />
    </>
);
