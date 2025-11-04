"use client";

import { Button } from "@/components/ui/button";
import { pageUrl } from "@/data/beetle-data";
import { SquareArrowOutUpLeft } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const TopNav = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md ${scrollY > 100 && "bg-bg-white/80 dark:bg-black/80"}`}
    >
      <div className="flex h-20 items-center justify-between border-b px-8">
        <section className="flex items-center gap-2">
          <Image
            src="/lucky-beetle-logo.png"
            alt="Lucky Beetle Logo"
            width={50}
            height={50}
          />
          <p className="text-2xl font-bold">Lucky Beetle</p>
        </section>
        <a href={pageUrl} target="_blank" rel="noopener noreferrer">
          <Button>
            <SquareArrowOutUpLeft />
            ไปที่หน้า Facebook
          </Button>
        </a>
      </div>
    </nav>
  );
};
