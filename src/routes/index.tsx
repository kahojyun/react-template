import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="space-y-8 py-8">
      <div className="text-center">
        <h1 className="text-foreground text-4xl font-bold">TanStack Demo</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Router + Query + Table
        </p>
      </div>

      <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-3">
        <div className="bg-card rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Router</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            File-based routing with type-safe navigation
          </p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Query</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Powerful async state management
          </p>
        </div>
        <div className="bg-card rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Table</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Headless UI for building tables
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/users"
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium"
        >
          View Users Demo →
        </Link>
      </div>
    </div>
  );
}
