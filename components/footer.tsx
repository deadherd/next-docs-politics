import Link from "next/link";
//import { buttonVariants } from "./ui/button";
//import { CommandIcon, HeartIcon, TriangleIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <p className="text-center">
            Paid for by Rationals Against Trump 
            <svg
              width="12"
              height="12"
              className="inline-block mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72.22 68.7"
            >
              <polygon
                className="fill-dindigo"
                points="58.42 68.7 36.11 52.5 13.8 68.7 22.31 42.48 0 26.25 27.57 26.25 36.11 0 44.65 26.25 72.22 26.25 49.88 42.48 58.42 68.7"
              />
            </svg>
            <Link className="px-1 underline underline-offset-2" href="#">
              Privacy
            </Link>
            |
            <Link className="px-1 underline underline-offset-2" href="#">
              Terms
            </Link>
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      {/*<Link
        href="https://github.com/sponsors/nisabmohd"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>*/}
    </>
  );
}
