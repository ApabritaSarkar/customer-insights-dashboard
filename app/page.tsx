import StatCard from "@/components/StatCard";
import SentimentChart from "@/components/SentimentChart";
import { customers, sentimentTrend } from "@/lib/mockData";

// This page is Server-Side Rendered (SSR) — data fetched fresh on every request
export const dynamic = "force-dynamic";

async function getDashboardStats() {
  const total = customers.length;
  const positive = customers.filter((c) => c.sentiment === "positive").length;
  const negative = customers.filter((c) => c.sentiment === "negative").length;
  const openTickets = customers.reduce((sum, c) => sum + c.ticketsOpen, 0);
  const avgScore = Math.round(
    customers.reduce((sum, c) => sum + c.score, 0) / total
  );
  return { total, positive, negative, openTickets, avgScore };
}

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">
          Overview
        </p>
        <h2 className="text-3xl font-bold text-white">Dashboard</h2>
        <p className="text-slate-400 mt-1 text-sm">
          Real-time customer health and sentiment summary
        </p>
      </div>

      {/* Stat cards */}
      <section
        aria-label="Summary statistics"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
      >
        <StatCard title="Total Customers" value={stats.total} accent="blue" />
        <StatCard title="Avg Sentiment Score" value={`${stats.avgScore}%`} accent="green" subtitle="Across all accounts" />
        <StatCard title="Open Tickets" value={stats.openTickets} accent="yellow" subtitle="Requiring attention" />
        <StatCard title="At-Risk Accounts" value={stats.negative} accent="red" subtitle="Negative sentiment" />
      </section>

      {/* Chart */}
      <section aria-label="Sentiment trend chart">
        <h3 className="text-lg font-semibold text-white mb-4">
          Sentiment Trend — Last 6 Months
        </h3>
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <SentimentChart data={sentimentTrend} />
        </div>
      </section>
    </div>
  );
}