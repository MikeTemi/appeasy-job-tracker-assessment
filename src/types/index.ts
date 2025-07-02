// Global type definitions for AppEasy Job Tracker

export interface AppConfig {
  name: string;
  version: string;
  description: string;
}

export interface Navigation {
  label: string;
  href: string;
  icon?: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Job-related types for future sprints
export interface JobApplication {
  id: string;
  title: string;
  company: string;
  status: "applied" | "interview" | "offer" | "rejected";
  dateApplied: Date;
  notes?: string;
}

export interface JobStatus {
  label: string;
  value: "applied" | "interview" | "offer" | "rejected";
  color: string;
}
