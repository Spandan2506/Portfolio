import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/project-card";
import { displayProjects } from "@/lib/portfolio-data";

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

function WorkIndex() {
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

      <div className="mx-auto mt-14 max-w-4xl space-y-12">
        {displayProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} showImage={false} />
        ))}
      </div>
    </div>
  );
}
