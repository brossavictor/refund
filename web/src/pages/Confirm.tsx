import { Navigate, useLocation } from "react-router";
import ok from "../assets/ok.svg";

export function Confirm() {
  const location = useLocation();

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />;
  }

  return (
    <div className="confirm">
      <h1>The request has been sent.</h1>
      <img src={ok} alt="ok" />
      <p>Now you just have to wait. Your request will be processed.</p>
      <a href="/">Make a new request</a>
    </div>
  );
}
