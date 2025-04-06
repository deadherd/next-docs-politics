import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="absolute top-0 left-0 block w-full h-[500px] bg-dark">

      </section>
      <div className="flex mt-[500px] sm:min-h-[85.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center px-2 sm:py-8 py-12">
        {/*<Link
          href="https://dripusa.bsky.social"
          target="_blank"
          className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
        >
          Follow us on Bluesky
          <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
        </Link>
        <h1 className="text-[2.4rem] leading-10 sm:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
          We Are The Rationals
        </h1>
        <p className="mb-4 sm:text-lg max-w-[800px] text-muted-foreground text-left sm:text-center">
          DRIP is a movement for those who believe in facts, fairness, and a
          functional democracy. Through data, action, and unity, we’re building
          smarter governance for a stronger future.
        </p>
        <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground text-left sm:text-center font-bold">
          Every voice, every dollar moves us forward.
        </p>
        <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm;gap-5 gap-3 mb-8">
          <Link
            href={`/docs${page_routes[0].href}`}
            className={buttonVariants({
              className: "px-6 text-xl h-14 bg-blue-400 hover:bg-blue-300",
              size: "lg",
            })}
          >
            $5
          </Link>
        </div>*/}
      </div>
      {/*<video
        width="1456"
        height="300"
        preload="auto"
        playsInline
        autoPlay
        muted
        loop
        className="w-full h-auto"
      >
        <source
          src="/assets/video/unstoppable-banner-slim-opt.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>*/}
    </>
  );
}
