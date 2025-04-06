import { ModeToggle } from "@/components/theme-toggle";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import LogoSvg from "./svg/Logo";

export const NAVLINKS = [
  {
    title: "Our Vision",
    href: "/vision",
  },
  {
    title: "Merch",
    href: "/blog",
  },
  {
    title: "Charter",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "Contact",
    href: "#",
  },
];

export function Navbar() {
  return (
    <nav className="w-full h-12 sticky top-0 z-50 bg-dindigo">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center sm:justify-between md:gap-2 sm:px-0">
        <div className="flex items-center sm:gap-5 gap-2.5">
          <SheetLeftbar />
          <div className="flex items-stretch">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="md:flex hidden items-stretch text-sm font-medium text-muted-foreground px-1">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1 sm:w-fit w-[90%]">
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-4 sm:ml-0 pr-2">
              <Link
                href="https://github.com/nisabmohd/NexDocs"  
                className={buttonVariants({
                  size: "icon",
                })}
              >
                <Github className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="#"
                className={buttonVariants({
                  size: "icon",
                })}
              >
                <Twitter className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      {/*<CommandIcon className="w-6 h-6 text-muted-foreground" strokeWidth={2} />
      <h2 className="text-md font-bold font-code">AriaDocs</h2>*/}
      <LogoSvg />
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-light/70 bg-dark/20 dark:font-medium hover:border-none hover:text-light pointer-events-none"
            absolute
            className="relative flex items-center px-3 gap-1 sm:text-sm text-[15px] dark:text-dark text-light tracking-normal font-title font-normal hover:text-white hover:border-y-2 border-b-light border-t-transparent hover:bg-dark/15 select-none"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
