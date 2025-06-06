import { useNavigate } from "react-router";
import { AuthContext } from "~/root";
import { useContext } from "react";

export const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-[20vw] pt-9">
      <div className="flex justify-between w-full">
        <button
          className="text-xl font-semibold cursor-pointer"
          aria-label="Login"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <button
          className="text-xl font-semibold cursor-pointer"
          onClick={() => setIsAuthenticated(false)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
