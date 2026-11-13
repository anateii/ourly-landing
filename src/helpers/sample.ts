// Illustrative data for the UI mocks. None of it is real: swap freely.

export type Who = "owner" | "partner";
export const people: Record<Who, { name: string; initial: string }> = {
  owner: { name: "Mia", initial: "M" },
  partner: { name: "Leo", initial: "L" },
};

// The featured goal in the mocks.
export const adventure = {
  title: "Weekend in Lisbon",
  targetDate: new Date(2027, 3, 2),
  targetLabel: "Fri 2 Apr 2027",
  progress: 60,
};

export interface SampleTask {
  id: string;
  title: string;
  meta: string;
  who: Who;
  done: boolean;
}
export const sampleTasks: SampleTask[] = [
  { id: "t1", title: "Book the flights", meta: "Today · Lisbon", who: "owner", done: false },
  { id: "t2", title: "Renew passports", meta: "Today", who: "partner", done: false },
  { id: "t3", title: "Pick a hotel in Alfama", meta: "Today · Lisbon", who: "partner", done: true },
  { id: "t4", title: "Set the monthly budget", meta: "Tomorrow", who: "owner", done: false },
];

// Days from today -> what's on (drives the dots in the two-week strip).
export type AgendaKind = "event" | "task" | "goal";
export const agenda: Record<number, AgendaKind[]> = {
  1: ["event"],
  3: ["task"],
  5: ["event", "task"],
  8: ["event"],
  10: ["task"],
  12: ["goal"],
};

export const budget = [
  { label: "Groceries", spent: 310, planned: 400, color: "var(--viz-3)" },
  { label: "Eating out", spent: 95, planned: 180, color: "var(--viz-2)" },
  { label: "Vacations · Lisbon fund", spent: 900, planned: 1500, color: "var(--viz-1)" },
];

// The four check-in questions and hints are the app's own (SpaceDialogs.tsx);
// the answers are made up.
export const moods = ["Great", "Good", "Okay", "Tough"] as const;
export type Mood = (typeof moods)[number];

export const checkInSteps = [
  {
    q: "How did this week feel?",
    hint: "One each. There are no wrong answers.",
    answers: null,
  },
  {
    q: "What went well?",
    hint: "Something you're glad about, big or small.",
    answers: { owner: "We finally booked the flights.", partner: "Cooking together on Sunday." },
  },
  {
    q: "What was hard?",
    hint: "Say it kindly. You're on the same team.",
    answers: {
      owner: "Too many late evenings at work.",
      partner: "We barely saw each other midweek.",
    },
  },
  {
    q: "What's one thing for next week?",
    hint: "Something you'll do together.",
    answers: { owner: "A phone-free dinner on Wednesday.", partner: "Plan day one in Lisbon." },
  },
] as const;

export const marqueeItems = [
  "A weekend in Lisbon",
  "Moving in together",
  "The rainy-day fund",
  "Date night",
  "Sunday check-ins",
  "The first flat",
];

export const faqs = [
  {
    q: "How does my partner join?",
    a: "When you start a space, Ourly creates an invite code you can copy or share. Your partner signs in, chooses “Join with an invite code” and types it in. Codes expire, and each one works once.",
  },
  {
    q: "Is Ourly only for two people?",
    a: "Yes. A space is shared by the two of you, and everything in it is built around that: who's leading a goal, whose task it is, who paid.",
  },
  {
    q: "What happens in a check-in?",
    a: "You each answer four short questions: how the week felt, what went well, what was hard, and one thing for next week. It takes about 10 minutes, and past check-ins stay in Our Space so you can look back.",
  },
  {
    q: "How do shared expenses work?",
    a: "Log what you paid and choose how to split it. Ourly keeps a running balance between you, and settling up brings it back to all square.",
  },
  {
    q: "How much does it cost?",
    a: "[YOUR PRICING]",
  },
];
