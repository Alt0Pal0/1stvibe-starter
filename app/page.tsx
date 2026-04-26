export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-brand-50 via-white to-white px-6 py-16">
      <div className="w-full max-w-xl rounded-2xl border-t-4 border-brand bg-white p-10 text-center shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Hello, $YOUR_NAME 👋
        </h1>
        <p className="mt-6 text-lg text-gray-700">Your site is live.</p>
        <p className="mt-4 text-sm text-gray-500">
          Edit <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs">app/page.tsx</code>{" "}
          to make it yours — Claude Code or BEA can help.
        </p>
        <p className="mt-10 text-xs text-gray-400">
          Built with{" "}
          <a href="https://1stvibe.ai" className="text-brand hover:underline">
            1stvibe.ai
          </a>
        </p>
      </div>
    </main>
  );
}
