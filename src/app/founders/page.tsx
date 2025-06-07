import Link from "next/link";

export default function FoundersPage() {
  return (
    <main className="min-h-screen p-6 sm:p-16 max-w-3xl mx-auto text-black">
      <h1 className="text-4xl font-bold text-blue mb-8">Founders</h1>

      <section className="mb-12 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-highlight">María López</h2>
          <p className="text-muted">Co-founder, Diversity Advocate, Community Organizer</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-highlight">Carlos Ramirez</h2>
          <p className="text-muted">Co-founder, Tech Entrepreneur, Public Speaker</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-purple mb-4">Connect With Us</h2>
        <ul className="space-y-2 text-lg">
          <li>
            <a
              href="https://twitter.com/connectthedots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/connectthedots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="mailto:info@connectdots.org"
              className="text-muted hover:underline"
            >
              Email Us
            </a>
          </li>
        </ul>
      </section>

      <div>
        <Link href="/" className="text-purple hover:underline font-medium">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
