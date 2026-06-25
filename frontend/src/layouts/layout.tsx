import type React from "react";

import "../index.css"

import NavigationBar from "../components/NavigationBar";

export default function Layout({ children, className }: { children: React.ReactNode, className: String }) {
  return (
    <div className="min-h-screen bg-background text-text">
      <NavigationBar />
      <main className={`flex flex-col px-5 py-8 ${className}`}>
        {children}
      </main>
    </div>
  );
}
