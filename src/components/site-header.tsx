import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

function AvailabilityBadge() {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-border/70 px-3.5 py-1.5 text-xs text-muted-foreground">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-copper" />
      </span>
      {profile.availability}
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8"
        >
          <Link
            to="/"
            className="font-display text-lg tracking-tight"
            onClick={() => setOpen(false)}
          >
            Spandan Chemburkar<span className="text-copper">.</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
                activeProps={{ className: "active" }}
              >
                {link.label}
              </Link>
            ))}
            <AvailabilityBadge />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="rounded-md p-2 transition-colors hover:bg-accent md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-background md:hidden">
          <div className="flex h-16 items-center justify-between border-b border-border/60 px-6">
            <Link
              to="/"
              className="font-display text-lg tracking-tight"
              onClick={() => setOpen(false)}
            >
              Spandan Chemburkar<span className="text-copper">.</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="rounded-md p-2 transition-colors hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col justify-center gap-2 px-8"
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className="group flex items-center justify-between border-b border-border/50 py-5 font-display text-3xl tracking-tight"
                onClick={() => setOpen(false)}
              >
                <span>
                  <span className="mr-3 text-sm text-muted-foreground">
                    0{i + 1}
                  </span>
                  {link.label}
                </span>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-copper" />
              </Link>
            ))}
          </nav>
          <div className="px-8 pb-10">
            <AvailabilityBadge />
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 block text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
