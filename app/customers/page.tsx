import Link from "next/link";
import SentimentBadge from "@/components/SentimentBadge";
import { customers } from "@/lib/mockData";

// SSG — data fetched at build time
export const dynamic = "force-static";

export default function CustomersPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">
          Directory
        </p>
        <h2 className="text-3xl font-bold text-white">Customers</h2>
        <p className="text-slate-400 mt-1 text-sm">
          All accounts — statically generated at build time
        </p>
      </div>

      <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
        <table className="w-full text-sm" role="table" aria-label="Customer directory">
          <thead>
            <tr className="border-b border-slate-800 text-left">
              <th scope="col" className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Company</th>
              <th scope="col" className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Sentiment</th>
              <th scope="col" className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Score</th>
              <th scope="col" className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Open Tickets</th>
              <th scope="col" className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, i) => (
              <tr
                key={customer.id}
                className={`border-b border-slate-800 hover:bg-slate-800 transition-colors ${
                  i === customers.length - 1 ? "border-0" : ""
                }`}
              >
                <td className="px-6 py-4">
                  <div className="font-medium text-white">{customer.name}</div>
                  <div className="text-slate-500 text-xs">{customer.email}</div>
                </td>
                <td className="px-6 py-4 text-slate-300">{customer.company}</td>
                <td className="px-6 py-4">
                  <SentimentBadge sentiment={customer.sentiment} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-slate-700 rounded-full h-1.5" role="progressbar" aria-valuenow={customer.score} aria-valuemin={0} aria-valuemax={100}>
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: `${customer.score}%` }}
                      />
                    </div>
                    <span className="text-slate-300">{customer.score}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-300">{customer.ticketsOpen}</td>
                <td className="px-6 py-4">
                  <Link
                    href={`/customers/${customer.id}`}
                    className="text-blue-400 hover:text-blue-300 text-xs font-semibold focus:outline-none focus:underline"
                    aria-label={`View details for ${customer.name}`}
                  >
                    View →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}