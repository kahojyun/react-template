import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="space-y-8 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground">
          TanStack Demo
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Router + Query + Table
        </p>
      </div>

      <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold">Router</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            File-based routing with type-safe navigation
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold">Query</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Powerful async state management
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold">Table</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Headless UI for building tables
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/users"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          View Users Demo →
        </Link>
      </div>
    </div>
  );
}
