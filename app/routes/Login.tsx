import { useContext } from "react";
import { redirect } from "react-router";
import { AuthContext } from "~/root";

export default function Login() {
  const { setIsAuthenticated } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 login-page dark:text-white">
      <div className="w-[25rem] p-8 bg-white dark:bg-[#161313] py-[3rem] rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center ">Login</h1>
        <form>
          <div className="mb-4">
            <input
              aria-label="Username"
              name="username"
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div className="mb-6">
            <input
              aria-label="Password"
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border-black border-1 transition-all duration-300 border-black cursor-pointer"
            onClick={() => {
              setIsAuthenticated(true);
              redirect("/");
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
