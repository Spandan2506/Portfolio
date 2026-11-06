import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.project.title} — Spandan Chemburkar`
          : "Project — Spandan Chemburkar",
      },
      {
        name: "description",
        content: loaderData
          ? loaderData.project.description
          : "A project by Spandan Chemburkar.",
      },
      {
        property: "og:title",
        content: loaderData
          ? `${loaderData.project.title} — Spandan Chemburkar`
          : "Project — Spandan Chemburkar",
      },
      {
        property: "og:description",
        content: loaderData
          ? loaderData.project.description
          : "A project by Spandan Chemburkar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length] ?? project;

  return (
    <article className="mx-auto max-w-6xl px-6 pb-28 pt-36 md:px-8 md:pt-44">
      <Link
        to="/work"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All work
      </Link>

      <header className="mt-10 max-w-3xl">
        <p className="eyebrow">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-6 font-display text-4xl font-medium tracking-tight md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>
      </header>

      <div className="mt-14 overflow-hidden rounded-2xl border border-border/60 bg-card">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1280}
          height={960}
          className="w-full object-cover"
        />
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-[2fr_1fr] md:gap-20">
        <div>
          <h2 className="eyebrow">Overview</h2>
          <p className="mt-6 font-display text-xl leading-relaxed tracking-tight md:text-2xl">
            {project.description}
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {project.overview}
          </p>

          <h2 className="eyebrow mt-14">Highlights</h2>
          <ul className="mt-6 space-y-4">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-copper" />
                <span className="text-sm leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside>
          <h2 className="eyebrow">Tech Stack</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border/70 px-3 py-1.5 text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>

          <dl className="mt-10 space-y-4 border-t border-border/60 pt-8 text-sm">
            <div>
              <dt className="text-muted-foreground">Role</dt>
              <dd className="mt-1 font-medium">Full-Stack Developer</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Year</dt>
              <dd className="mt-1 font-medium">{project.year}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Type</dt>
              <dd className="mt-1 font-medium">{project.category}</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="mt-20 border-t border-border/60 pt-10">
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group flex items-center justify-between gap-6 rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-foreground/20"
        >
          <div>
            <p className="eyebrow">Next project</p>
            <p className="mt-2 font-display text-xl tracking-tight md:text-2xl">
              {next.title}
            </p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-copper" />
        </Link>
      </div>
    </article>
  );
}
