import type { Client } from "../types/client";

type ClientsTableProps = {
    data: Client[];
};

export function ClientsTable({ data }: ClientsTableProps) {
    return (
        <div className="overflow-hidden border border-[#1F1F1F] sm:rounded-lg shadow-md shadow-white/5">
            <table className="min-w-full">
                <thead className="bg-[#0D1F2D]">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left  text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                            Phone
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                            Pesel
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                            Created At
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                        >
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                    {data.map((item) => (
                        <tr key={item.name} className="bg-[#0A0A0A] hover:bg-[#141414] transition-all duration-200 cursor-pointer">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                {item.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                {item.phone}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                {item.pesel}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                {item.createdAt}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span
                                    className={`px-3 py-[2px] inline-flex text-xs leading-5 font-semibold rounded-lg ${item.isDeleted
                                        ? "text-[#CC0000] border border-[#CC0000] bg-[#CC0000]/10"
                                        : "text-[#0B6F0B] border border-[#0B6F0B] bg-[#0B6F0B]/10"
                                        }`}
                                >
                                    {item.isDeleted ? "Deleted" : "Active"}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 