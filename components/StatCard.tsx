type Props = {
  title: string;
  value: string | number;
  subtitle?: string;
  accent?: "blue" | "green" | "red" | "yellow";
};

const accentMap = {
  blue: "border-blue-500 text-blue-400",
  green: "border-green-500 text-green-400",
  red: "border-red-500 text-red-400",
  yellow: "border-yellow-500 text-yellow-400",
};

export default function StatCard({ title, value, subtitle, accent = "blue" }: Props) {
  return (
    <article
      className={`bg-slate-900 rounded-xl p-6 border-l-4 ${accentMap[accent]}`}
      aria-label={`${title}: ${value}`}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
        {title}
      </p>
      <p className={`text-4xl font-bold ${accentMap[accent].split(" ")[1]}`}>
        {value}
      </p>
      {subtitle && (
        <p className="text-sm text-slate-500 mt-2">{subtitle}</p>
      )}
    </article>
  );
}