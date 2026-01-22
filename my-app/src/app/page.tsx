import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center gap-8 py-32 px-16">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
          Welcome
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Please choose an option to continue
        </p>
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Link
            href="/login"
            className="flex h-12 items-center justify-center rounded-lg bg-black px-6 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Login
          </Link>
          <Link
            href="/registration"
            className="flex h-12 items-center justify-center rounded-lg border-2 border-black px-6 text-black transition-colors hover:bg-zinc-100 dark:border-white dark:text-white dark:hover:bg-zinc-900"
          >
            Registration
          </Link>
        </div>
      </main>
    </div>
  );
}
