import { Customer, Feedback } from "./types";

export const customers: Customer[] = [
  { id: 1, name: "Priya Sharma", email: "priya@acmecorp.com", company: "Acme Corp", sentiment: "positive", ticketsOpen: 2, score: 88 },
  { id: 2, name: "Rohan Mehta", email: "rohan@globaltech.io", company: "GlobalTech", sentiment: "neutral", ticketsOpen: 5, score: 61 },
  { id: 3, name: "Aisha Khan", email: "aisha@nexaretail.com", company: "Nexa Retail", sentiment: "negative", ticketsOpen: 9, score: 34 },
  { id: 4, name: "David Chen", email: "david@brightwave.ai", company: "BrightWave AI", sentiment: "positive", ticketsOpen: 1, score: 94 },
  { id: 5, name: "Sara Okonkwo", email: "sara@urbanlogix.net", company: "UrbanLogix", sentiment: "neutral", ticketsOpen: 4, score: 72 },
  { id: 6, name: "James Patel", email: "james@cloudnest.co", company: "CloudNest", sentiment: "positive", ticketsOpen: 0, score: 97 },
];

export const feedback: Feedback[] = [
  { id: 1, customerId: 1, comment: "Very responsive support team, resolved our issue quickly.", date: "2024-06-10", rating: 5 },
  { id: 2, customerId: 1, comment: "Onboarding was smooth, would appreciate more documentation.", date: "2024-05-22", rating: 4 },
  { id: 3, customerId: 2, comment: "Average experience. Response time could be faster.", date: "2024-06-08", rating: 3 },
  { id: 4, customerId: 3, comment: "Multiple unresolved tickets. Escalation process is unclear.", date: "2024-06-12", rating: 1 },
  { id: 5, customerId: 3, comment: "Dashboard keeps timing out. Needs urgent fix.", date: "2024-06-01", rating: 2 },
  { id: 6, customerId: 4, comment: "Excellent! Team goes above and beyond every time.", date: "2024-06-14", rating: 5 },
  { id: 7, customerId: 5, comment: "Good product but billing portal needs improvement.", date: "2024-06-09", rating: 3 },
  { id: 8, customerId: 6, comment: "Zero issues in 6 months. Best vendor we work with.", date: "2024-06-11", rating: 5 },
];

export const sentimentTrend = [
  { month: "Jan", positive: 40, neutral: 35, negative: 25 },
  { month: "Feb", positive: 45, neutral: 30, negative: 25 },
  { month: "Mar", positive: 50, neutral: 32, negative: 18 },
  { month: "Apr", positive: 48, neutral: 34, negative: 18 },
  { month: "May", positive: 55, neutral: 28, negative: 17 },
  { month: "Jun", positive: 60, neutral: 27, negative: 13 },
];