export type Customer = {
  id: number;
  name: string;
  email: string;
  company: string;
  sentiment: "positive" | "neutral" | "negative";
  ticketsOpen: number;
  score: number;
};

export type Feedback = {
  id: number;
  customerId: number;
  comment: string;
  date: string;
  rating: number;
};