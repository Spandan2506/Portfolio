import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/project-card";
import { projectCategories, projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work/")({
  component: WorkIndex,
  head: () => ({
    meta: [
      { title: "Work — Spandan Chemburkar" },
      {
        name: "description",
        content:
          "Completed works by Spandan Chemburkar: full-stack web platforms, AI assistants, desktop tools and e-commerce builds.",
      },
      { property: "og:title", content: "Work — Spandan Chemburkar" },
      {
        property: "og:description",
        content:
          "Completed works by Spandan Chemburkar: full-stack web platforms, AI assistants, desktop tools and e-commerce builds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Category = (typeof projectCategories)[number];

function WorkIndex() {
  const [filter, setFilter] = useState<Category>("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-28 pt-36 md:px-8 md:pt-44">
      <header className="max-w-2xl">
        <p className="eyebrow">Completed Works</p>
        <h1 className="mt-6 font-display text-4xl font-medium tracking-tight md:text-6xl">
          A record of things{" "}
          <em className="font-serif font-normal italic text-copper">
            built &amp; shipped.
          </em>
        </h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Commercial platforms, campus AI, systems tooling and e-commerce —
          each project below is a full build, from data model to interface.
        </p>
      </header>

      <nav
        aria-label="Filter projects"
        className="mt-14 flex flex-wrap gap-2.5"
      >
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={
              filter === category
                ? "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity"
                : "rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            }
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </div>

      <div className="mt-10 grid gap-x-10 gap-y-16 md:grid-cols-2">
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} priority={i < 2} />
        ))}
      </div>
    </div>
  );
}
