import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ErrorPage.css";

export function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: `Redirected from ` });
    }, 2000);
  }, [navigate]);
  return (
    <div className="error">
      <h1>Error Not Found</h1>
      <p>Redirecting to Home Page</p>
    </div>
  );
}
