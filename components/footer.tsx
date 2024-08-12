import { Button } from "@/components/ui/button";
import { Instagram, Music, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-4 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-start ml-4 relative">
            <Image src="/logo.svg" alt="Logo" width={100} height={40} />
          </div>
        </div>
        <nav className="flex items-center space-x-4 text-sm">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Terms
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" aria-label="X (formerly Twitter)">
            <X className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="TikTok">
            <Music className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
