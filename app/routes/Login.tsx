import type { Route } from "../+types/root";
import { loader, action } from "./Login.server";

export { loader, action };

export default function Login({ loaderData }: Route.ComponentProps) {
  const { error } = (loaderData as unknown as { error?: string }) ?? {};
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#0A0A0A] text-white">
      <h1 className="text-2xl font-bold mb-6 text-center tracking-tight">Login</h1>
      <div className="w-[25rem] p-8 bg-[#1F1F1F]/80 rounded-lg shadow-md shadow-white/5 border border-[#1F1F1F]">
        <form method="post" action="/login">
          <div className="mb-4">
            <input
              aria-label="Username"
              name="username"
              type="text"
              placeholder="Username"
              className="w-full p-3 border border-[#1F1F1F] rounded-lg bg-[#0A0A0A] text-white focus:outline-none focus:ring-1"
            />
            {error ? <div className="pt-2 pl-1 pb-2 text-sm text-red-400/80">{error}</div> : null}
          </div>
          <div className="mb-6">
            <input
              aria-label="Password"
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-[#1F1F1F] rounded-lg bg-[#0A0A0A] text-white focus:outline-none focus:ring-1"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-[#0A0A0A] text-white rounded-lg border-2 border-[#637074]/20 transition-all duration-300 cursor-pointer font-semibold"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

