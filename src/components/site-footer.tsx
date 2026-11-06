import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <Link
            to="/"
            className="font-display text-lg tracking-tight"
          >
            Spandan Chemburkar<span className="text-copper">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {profile.role} based in {profile.location}. Building robust systems
            and refined interfaces.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" /> {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-muted-foreground md:px-8">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Mumbai, India</span>
        </div>
      </div>
    </footer>
  );
}
