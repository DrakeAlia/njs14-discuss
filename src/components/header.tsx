import Link from "next/link";
import HeaderAuth from "@/components/header-auth";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { SearchInput } from "@/components/search-input";
import { Suspense } from "react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">Discuss</span>
        </Link>
        <Suspense>
          <SearchInput />
        </Suspense>
        <div className="flex items-center gap-1">
          <Link
            href="https://github.com/DrakeAlia/njs14-discuss"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href="https://twitter.com/drake___alia"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.twitter className="h-3 w-3 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          <ModeToggle />
          <HeaderAuth />
        </div>
      </nav>
    </header>
  );
}
