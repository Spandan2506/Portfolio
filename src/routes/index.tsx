import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Database,
  Github,
  Layout,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Terminal,
} from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { displayProjects, profile, skillGroups } from "@/lib/portfolio-data";

const skillIcons = {
  layout: Layout,
  server: Server,
  database: Database,
  terminal: Terminal,
} as const;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Spandan Chemburkar — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Spandan Chemburkar, a full-stack developer in Mumbai, India. Featured projects in web platforms, AI assistants, data forensics and e-commerce, built with Node.js, React and TypeScript.",
      },
      { property: "og:title", content: "Spandan Chemburkar — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Featured projects in web platforms, AI assistants, data forensics and e-commerce, built with Node.js, React and TypeScript.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: profile.name,
              jobTitle: profile.role,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressCountry: "IN",
              },
              email: `mailto:${profile.email}`,
              sameAs: [profile.github, profile.linkedin],
              knowsAbout: [
                "Node.js",
                "Express",
                "React",
                "Next.js",
                "TypeScript",
                "PostgreSQL",
                "MongoDB",
                "REST APIs",
                "Docker",
                "Tailwind CSS",
              ],
            },
            {
              "@type": "WebSite",
              name: `${profile.name} — Portfolio`,
              url: "https://spandanch.dev",
            },
          ],
        }),
      },
    ],
  }),
});

function EmailCopyButton() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable; the mailto link next to it still works.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm transition-colors hover:border-foreground/30 hover:bg-accent"
      aria-label={`Copy email address ${profile.email}`}
    >
      <Mail className="h-4 w-4 text-copper" />
      <span className="font-medium">{profile.email}</span>
      {copied ? (
        <Check className="h-4 w-4 text-copper" aria-label="Copied" />
      ) : (
        <Copy className="h-4 w-4 text-muted-foreground" />
      )}
    </button>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 pt-28 md:px-8 md:pb-36 md:pt-40">
      <h1 className="font-display text-5xl font-bold leading-none tracking-tight underline decoration-2 decoration-copper underline-offset-8 md:text-7xl">
        {profile.name}
      </h1>
      <p className="mt-7 eyebrow animate-in fade-in slide-in-from-bottom-2 duration-700">
        {profile.role} · {profile.location}
      </p>
      <h2 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.04] tracking-tight md:text-7xl">
        Engineering robust systems, designing{" "}
        <em className="font-serif font-normal italic text-copper">refined</em>{" "}
        interfaces.
      </h2>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
        {profile.intro}
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Explore Work
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/"
          hash="contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/40"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:gap-20 md:px-8 md:py-32">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            About
          </h2>
          <div className="mt-7 h-px w-16 bg-copper" />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Thoughtful systems and clear experiences, built to last.
          </p>
        </div>
        <div className="max-w-2xl">
          <p className="border-l-2 border-copper pl-5 font-display text-2xl leading-snug tracking-tight md:text-3xl">
            I care about the parts nobody sees and the moments everybody
            feels — <span className="font-serif italic">reliable</span>{" "}
            backends, and interfaces that get out of the way.
          </p>
          <p className="mt-9 leading-relaxed text-muted-foreground">
            I'm a full-stack developer from Mumbai working across the stack
            with Node.js, Express, React, Next.js and TypeScript, backed by
            PostgreSQL and MongoDB. My work leans toward engineering robust
            backend systems — real-time booking flows, REST APIs, data-heavy
            tools — and pairing them with clean, user-centric interfaces built
            in React and Tailwind CSS.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            From crane rental platforms to AI campus assistants and
            low-level data forensics tools, I like projects where solid
            engineering meets a real, practical need — then shipping them
            with Docker and deploying them so they simply work.
          </p>
          <dl className="mt-10 grid grid-cols-3 divide-x divide-border/60 border-y border-border/60 py-5">
            <div className="pr-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Based in</dt>
              <dd className="mt-2 font-display text-lg tracking-tight">Mumbai</dd>
            </div>
            <div className="px-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Focus</dt>
              <dd className="mt-2 font-display text-lg tracking-tight">Full stack</dd>
            </div>
            <div className="pl-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Building with</dt>
              <dd className="mt-2 font-display text-lg tracking-tight">Node + React</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="border-t border-border/60 bg-cream/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Selected Work
            </h2>
            <p className="mt-3 text-lg text-muted-foreground md:text-xl">
              Featured projects
            </p>
          </div>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
          >
            View all work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="mx-auto mt-14 max-w-4xl space-y-12">
          {displayProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} showImage={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Tech Stack
        </h2>
        <p className="mt-3 max-w-xl text-lg text-muted-foreground md:text-xl">
          Tools I build with
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = skillIcons[group.icon];
            return (
              <div
                key={group.label}
                className="rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-foreground/20"
              >
                <Icon className="h-5 w-5 text-copper" />
                <h3 className="mt-5 font-display text-lg tracking-tight">
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border/60 bg-cream/40"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Contact
          </h2>
          <p className="mt-3 max-w-md font-display text-3xl leading-snug tracking-tight md:text-4xl">
            Let's build something{" "}
            <em className="font-serif font-normal italic text-copper">
              worth shipping.
            </em>
          </p>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            I'm currently open to full-time roles, freelance projects and
            interesting collaborations. The fastest way to reach me is email —
            I usually reply within a day.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-copper" /> Mumbai, India
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <EmailCopyButton />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm transition-colors hover:border-foreground/30 hover:bg-accent"
          >
            <Linkedin className="h-4 w-4 text-copper" />
            <span className="font-medium">LinkedIn</span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm transition-colors hover:border-foreground/30 hover:bg-accent"
          >
            <Github className="h-4 w-4 text-copper" />
            <span className="font-medium">GitHub</span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <TechStack />
      <Contact />
    </>
  );
}
