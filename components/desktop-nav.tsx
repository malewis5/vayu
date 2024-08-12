import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function DesktopNav({
  navItems,
}: {
  navItems: { name: string; href: string }[];
}) {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-2 h-full items-center justify-center">
        {navItems.map((item) => (
          <li key={item.name} className="flex items-center h-full px-4">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
        <li className="flex items-center h-full px-4">
          <Link
            target="_blank"
            href="https://calendly.com/mttlws/vayu-demo"
            className={buttonVariants({ variant: "default" })}
          >
            Schedule a Demo
          </Link>
        </li>
      </ul>
    </nav>
  );
}
