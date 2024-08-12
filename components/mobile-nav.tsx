"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav({
  navItems,
}: {
  navItems: { name: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="mr-2">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0 w-full">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={40}
            className="mb-8"
          />
          <div className="mt-8 flex w-full items-center justify-center">
            <Link
              target="_blank"
              href="https://calendly.com/mttlws/vayu-demo"
              className={buttonVariants({ variant: "default" })}
            >
              Schedule a Demo
            </Link>
          </div>
          <nav className="grid gap-6 text-lg font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-foreground/80 text-foreground/60"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
