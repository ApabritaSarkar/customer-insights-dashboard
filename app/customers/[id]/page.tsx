import { notFound } from "next/navigation";
import Link from "next/link";
import SentimentBadge from "@/components/SentimentBadge";
import { customers, feedback } from "@/lib/mockData";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return customers.map((c) => ({ id: String(c.id) }));
}

export default async function CustomerDetailPage({ params }: Props) {
  const { id } = await params;
  const customer = customers.find((c) => c.id === Number(id));
  if (!customer) notFound();

  const customerFeedback = feedback.filter((f) => f.customerId === customer.id);

  return (
    <div>
      <Link
        href="/customers"
        className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white mb-6 focus:outline-none focus:underline"
        aria-label="Back to customers list"
      >
        ← Back to Customers
      </Link>

      <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">{customer.name}</h2>
            <p className="text-slate-400 mt-1">{customer.email}</p>
            <p className="text-slate-500 text-sm">{customer.company}</p>
          </div>
          <SentimentBadge sentiment={customer.sentiment} />
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-slate-800">
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Sentiment Score</p>
            <p className="text-2xl font-bold text-blue-400">{customer.score}%</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Open Tickets</p>
            <p className="text-2xl font-bold text-yellow-400">{customer.ticketsOpen}</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Feedback Items</p>
            <p className="text-2xl font-bold text-slate-300">{customerFeedback.length}</p>
          </div>
        </div>
      </div>

      <section aria-label="Customer feedback history">
        <h3 className="text-lg font-semibold text-white mb-4">Feedback History</h3>
        {customerFeedback.length === 0 ? (
          <p className="text-slate-500 text-sm">No feedback recorded yet.</p>
        ) : (
          <ul className="space-y-3">
            {customerFeedback.map((item) => (
              <li key={item.id} className="bg-slate-900 rounded-xl border border-slate-800 p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-1" aria-label={`Rating: ${item.rating} out of 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < item.rating ? "text-yellow-400" : "text-slate-700"} aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>
                  <time className="text-xs text-slate-500" dateTime={item.date}>
                    {new Date(item.date).toLocaleDateString("en-IN", {
                      day: "numeric", month: "short", year: "numeric",
                    })}
                  </time>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{item.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}