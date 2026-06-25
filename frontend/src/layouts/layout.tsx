import type React from "react";

import "../index.css"

import NavigationBar from "../components/NavigationBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <main className="flex flex-col p-4 text-text">
        {children}
      </main>
    </div>
  );
}
