import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { certificates } from "@/lib/portfolio-data";

export const Route = createFileRoute("/certificates")({
  component: Certificates,
  head: () => ({
    meta: [
      { title: "Certificates — Spandan Chemburkar" },
      {
        name: "description",
        content:
          "Professional certifications, credentials and achievements of Spandan Chemburkar, full-stack developer.",
      },
      { property: "og:title", content: "Certificates — Spandan Chemburkar" },
      {
        property: "og:description",
        content:
          "Professional certifications, credentials and achievements of Spandan Chemburkar, full-stack developer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Certificates() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-28 pt-36 md:px-8 md:pt-44">
      <header className="max-w-2xl">
        <p className="eyebrow">Credentials</p>
        <h1 className="mt-6 font-display text-4xl font-medium tracking-tight md:text-6xl">
          Certificates &amp;{" "}
          <em className="font-serif font-normal italic text-copper">
            achievements.
          </em>
        </h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Professional certifications and credentials earned along the way —
          a record of continuous learning across the stack.
        </p>
      </header>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {certificates.map((certificate) => (
          <article
            key={certificate.title}
            className="group rounded-xl border border-border/60 bg-card p-7 transition-colors hover:border-foreground/20"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full bg-cream p-3 text-copper">
                <Award className="h-5 w-5" />
              </span>
              <span className="text-sm text-muted-foreground">
                {certificate.year}
              </span>
            </div>
            <h2 className="mt-6 font-display text-xl tracking-tight">
              {certificate.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {certificate.issuer}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {certificate.note}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
