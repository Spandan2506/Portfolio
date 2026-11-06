import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="group">
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-xl"
      >
        <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1280}
            height={960}
            loading={priority ? "eager" : "lazy"}
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.category} · {project.year}
            </p>
          </div>
          <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper" />
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border/70 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
}
