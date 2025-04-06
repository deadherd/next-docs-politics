"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean;
  activeClassName?: string;
  disabled?: boolean;
};

export default function Anchor({
  absolute,
  className = "",
  activeClassName = "",
  disabled,
  children,
  ...props
}: AnchorProps) {
  const path = usePathname();
  let isMatch = absolute
    ? props.href.toString().split("/")[1] == path.split("/")[1]
    : path === props.href;

  if (props.href.toString().includes("http")) isMatch = false;

  if (disabled)
    return (
      <div className={cn(className, "cursor-not-allowed")}>{children}</div>
    );
  return (
    <Link className={cn(className, isMatch && activeClassName)} {...props}>
      {children}

      {isMatch && (
        <svg
          width="8"
          height="8"
          className="absolute top-full left-1/2 -ml-[4px] -mt-[16px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 72.22 68.7"
        >
          <polygon
            className="fill-light"
            points="58.42 68.7 36.11 52.5 13.8 68.7 22.31 42.48 0 26.25 27.57 26.25 36.11 0 44.65 26.25 72.22 26.25 49.88 42.48 58.42 68.7"
          />
        </svg>
      )}
    </Link>
  );
}
