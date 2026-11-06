import { Outlet, createFileRoute } from "@tanstack/react-router";

// Layout route: the /work index page and /work/$slug detail pages render here.
export const Route = createFileRoute("/work")({
  component: WorkLayout,
});

function WorkLayout() {
  return <Outlet />;
}
