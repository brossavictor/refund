import { Routes, Route } from "react-router";
import { Refund } from "../pages/Refund.tsx";
import { NotFound } from "../pages/NotFound.tsx";
import { AppLayout } from "../layouts/AppLayout.tsx";

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
