import type { Route } from "../+types/root";
import { loader, action } from "./Login.server";

export { loader, action };

export default function Login({ loaderData }: Route.ComponentProps) {
  const { error } = (loaderData as unknown as { error?: string }) ?? {};
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="w-[25rem] p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form method="post" action="/login">
          <div className="mb-4">
            <input
              aria-label="Username"
              name="username"
              type="text"
              placeholder="Username"
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error ? <div className="pt-2 pl-1 pb-2 text-sm text-red-500">{error}</div> : null}
          </div>
          <div className="mb-6">
            <input
              aria-label="Password"
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

