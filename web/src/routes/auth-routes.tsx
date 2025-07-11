import { Routes, Route } from "react-router";
import SignIn from "../pages/SignIn";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}
