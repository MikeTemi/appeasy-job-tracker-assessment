import { AppConfig, FeatureCard, Navigation } from "@/types";

export const APP_CONFIG: AppConfig = {
  name: "AppEasy Job Tracker",
  version: "1.0.0",
  description:
    "Mini Job Tracker - Full-stack Next.js app for AppEasy Software Engineering Intern Assessment",
};

export const NAVIGATION_ITEMS: Navigation[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Jobs", href: "/jobs" },
  { label: "Settings", href: "/settings" },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "track",
    title: "Track Applications",
    description:
      "Keep track of all your job applications in one organized place.",
    icon: "📋",
  },
  {
    id: "analytics",
    title: "Analytics",
    description:
      "Get insights into your job search progress and success rates.",
    icon: "📊",
  },
  {
    id: "goals",
    title: "Goal Setting",
    description: "Set and track your job application goals to stay motivated.",
    icon: "🎯",
  },
];

export const BRAND_COLORS = {
  mintGreen: "#98f72a",
  charcoal: "#121212",
  lightGray: "#FFFFFF",
} as const;
