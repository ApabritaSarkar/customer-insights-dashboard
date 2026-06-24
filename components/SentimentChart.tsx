"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type DataPoint = {
  month: string;
  positive: number;
  neutral: number;
  negative: number;
};

export default function SentimentChart({ data }: { data: DataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
        <XAxis dataKey="month" stroke="#64748b" tick={{ fill: "#94a3b8", fontSize: 12 }} />
        <YAxis stroke="#64748b" tick={{ fill: "#94a3b8", fontSize: 12 }} />
        <Tooltip
          contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", borderRadius: "8px", color: "#f1f5f9" }}
        />
        <Legend wrapperStyle={{ color: "#94a3b8", fontSize: "12px" }} />
        <Line type="monotone" dataKey="positive" stroke="#22c55e" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="neutral" stroke="#eab308" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="negative" stroke="#ef4444" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}