// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="text-muted-foreground">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block rounded-md px-4 py-2 border"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
