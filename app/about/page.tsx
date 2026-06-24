export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-1">
          Info
        </p>
        <h2 className="text-3xl font-bold text-white">About This Tool</h2>
      </div>

      <div className="space-y-6 text-slate-300 leading-relaxed">
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <h3 className="text-white font-semibold mb-2">What is this?</h3>
          <p className="text-sm">
            Customer Insights Dashboard is an internal tool built for Managed Services teams to monitor
            customer sentiment, track open support tickets, and identify at-risk accounts — all in one place.
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <h3 className="text-white font-semibold mb-3">Tech Stack</h3>
          <ul className="text-sm space-y-2">
            {[
              ["Framework", "Next.js 14 with App Router"],
              ["Rendering", "SSR (dashboard), SSG (customer list), Dynamic routes"],
              ["Styling", "Tailwind CSS"],
              ["Charts", "Recharts"],
              ["Language", "TypeScript"],
              ["Testing", "Jest + React Testing Library"],
            ].map(([key, val]) => (
              <li key={key} className="flex gap-3">
                <span className="text-slate-500 w-24 shrink-0">{key}</span>
                <span>{val}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <h3 className="text-white font-semibold mb-2">Accessibility</h3>
          <p className="text-sm">
            Built with WCAG 2.1 AA guidelines — semantic HTML, ARIA labels, keyboard navigation,
            and sufficient colour contrast throughout.
          </p>
        </div>
      </div>
    </div>
  );
}