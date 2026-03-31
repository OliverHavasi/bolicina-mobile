import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-heading font-bold text-[48px] text-selce">404</h1>
        <p className="font-body text-[16px] text-ink-3 mt-2">Stránka sa nenašla</p>
        <Link to="/" className="inline-block mt-4 px-6 py-2.5 bg-selce text-white rounded-lg font-heading font-semibold text-[14px] press">
          Domov
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
