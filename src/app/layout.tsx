import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AppEasy Job Tracker",
  description:
    "Mini Job Tracker - Full-stack Next.js app for AppEasy Software Engineering Intern Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
