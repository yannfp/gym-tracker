import type React from "react";

import "../index.css"

import NavigationBar from "../components/NavigationBar";

interface LayoutProps {
  children: React.ReactNode,
  className?: string,
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className="h-screen w-full flex flex-col bg-background text-text overflow-hidden">
      <NavigationBar />
      <main className={`flex-1 overflow-y-auto flex flex-col px-5 pt-8 pb-24 scroll-smooth ${className}`}>
        {children}
      </main>
    </div>
  );
}
