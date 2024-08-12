import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-[calc(100svh-4rem)] w-full overflow-hidden">
      <Image
        src="/vayu.jpeg"
        alt="Hero background"
        fill
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-left container">
          <h1 className="mb-4 font-medium text-4xl sm:text-5xl md:text-6xl lg:max-w-[50%]">
            Meet your AI Security Workforce
          </h1>
          <p className="mb-8 text-xl sm:text-2xl lg:max-w-[50%]">
            Vayu accelerates your compliance timelines at a fraction of the
            cost.
          </p>
          <Link
            target="_blank"
            href="https://calendly.com/mttlws/vayu-demo"
            className={buttonVariants({ variant: "default" })}
          >
            Schedule a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
