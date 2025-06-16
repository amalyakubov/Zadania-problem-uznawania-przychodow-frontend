import type { Route } from "./+types/Home";
import { Header } from "../components/Header";
import { useLoaderData } from "react-router";
import { loader } from "./Home.server";
import { ClientsTable } from "../components/ClientsTable";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export { loader };

export default function Home() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <div className="h-full w-full bg-[#0A0A0A]">
      <Header />
      <Section>
        <h1 className="text-xl font-semibold text-gray-300 pb-9">Clients</h1>
        <ClientsTable data={data} />
      </Section>
    </div>
  );
}

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-8 py-12">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};