import { Routes, Route } from "react-router";
import { AuthLayout } from "../components/AuthLayout.tsx";

import { SignIn } from "../pages/SignIn.tsx";
import { SingUp } from "../pages/SignUp.tsx";
import { NotFound } from "../pages/NotFound.tsx";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SingUp />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
