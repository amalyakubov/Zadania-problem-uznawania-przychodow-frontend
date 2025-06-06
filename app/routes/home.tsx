import type { Route } from "./+types/Home";
import { Header } from "../components/Header";
import { useContext, useEffect } from "react";
import { AuthContext } from "../root";
import { redirect } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      redirect("/login");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center pt-[10rem]">
        <p className="text-2xl font-bold mb-4 text-left w-[50%]">Clients</p>
        <table className="w-[50%] border pt-4">
          <thead>
            <tr>
              <th className="border border-slate-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
              <th className="border border-gray-300 p-2">Pesel</th>
              <th className="border border-gray-300 p-2">Created At</th>
              <th className="border border-gray-300 p-2">Is deleted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">John Doe</td>
              <td className="border border-gray-300 p-2">
                john.doe@example.com
              </td>
              <td className="border border-gray-300 p-2">1234567890</td>
              <td className="border border-gray-300 p-2">1234567890</td>
              <td className="border border-gray-300 p-2">2021-01-01</td>
              <td className="border border-gray-300 p-2">false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
