type Sentiment = "positive" | "neutral" | "negative";

const styles: Record<Sentiment, string> = {
  positive: "bg-green-900 text-green-300 border border-green-700",
  neutral: "bg-yellow-900 text-yellow-300 border border-yellow-700",
  negative: "bg-red-900 text-red-300 border border-red-700",
};

export default function SentimentBadge({ sentiment }: { sentiment: Sentiment }) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${styles[sentiment]}`}
      role="status"
      aria-label={`Sentiment: ${sentiment}`}
    >
      {sentiment}
    </span>
  );
}