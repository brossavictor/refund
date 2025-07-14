import { Outlet } from "react-router";
import logoSvg from "../assets/logo.svg";

export function AuthLayout() {
  return (
    <div>
      <main className="authLayout">
        <img src={logoSvg} alt="Logo" />
        <Outlet />
      </main>
    </div>
  );
}
