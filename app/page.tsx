import Hero from "@/components/hero";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="w-full bg-white container my-12 mx-auto">
        <div className="grid w-full lg:grid-cols-12">
          <div className="col-span-5">
            <h2 className="text-2xl mb-2 uppercase">What Makes Us Different</h2>
            <p className="text-3xl">Our Strengths</p>
            <div className="mt-8">
              <h3 className="text-2xl">Auditor Network</h3>
              <p className="text-xl">
                We work directly with AICPA-accredited auditors to help train
                and inform our family of AI agents on specific control
                definitions and acceptable evidence to help our clients prepare
                for an audit efficiently and accurately.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl">Agentic AI</h3>
              <p className="text-xl">
                Clients can chat with our family of AI agents to help guide you
                through the process of preparing for an audit. Our agents can
                chat and help fetch evidence from a variety of sources,
                including major cloud providers (Google Cloud, AWS, Microsoft
                Azure), in a format that is acceptable to auditors.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl">Adaptibility</h3>
              <p className="text-xl">
                Our family of AI agents are trained to adapt to the specific
                needs of each client. This means that our agents can be trained
                to understand the unique processes and controls of your
                organization, and can help you prepare for an audit in a way
                that is tailored to your specific needs.
              </p>
            </div>
          </div>
          <div className="col-span-6 col-start-7 mx-auto w-full items-center justify-center hidden lg:flex">
            <div className="w-full h-full relative">
              <Image
                src="/robots.png"
                alt="Vayu"
                fill
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f9f5f0] container py-12">
        <h2 className="text-4xl pb-12 text-center">Our Solution</h2>
        <div className="max-w-4xl mx-auto">
          <AspectRatio
            ratio={16 / 9}
            className="bg-white rounded-md shadow-md overflow-hidden"
          >
            <iframe
              src="https://www.youtube.com/embed/1y_kfWUCFDQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full"
            ></iframe>
          </AspectRatio>
        </div>
      </section>
    </main>
  );
}
