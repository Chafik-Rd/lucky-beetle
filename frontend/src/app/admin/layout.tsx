"use client";

import { SlideNav } from "./_components/slidenav";
import { TopNavAdmin } from "./_components/topnav";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const lastSegment =
    pathname
      .split("/")
      .filter((s) => s.trim() !== "")
      .pop() ?? "";

  return (
    <div className="flex min-h-screen">
      <SlideNav lastSegment={lastSegment} />
      <div className="flex flex-1 flex-col items-center gap-10 p-8">
        <TopNavAdmin lastSegment={lastSegment} />
        {children}
      </div>
    </div>
  );
}
