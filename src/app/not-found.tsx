
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#07130d] px-5 py-16 text-white">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-green-500/10 blur-[120px]" />

        <div className="absolute left-[10%] top-[15%] h-3 w-3 animate-bounce rounded-full bg-lime-400" />

        <div className="absolute right-[15%] top-[25%] h-2 w-2 animate-ping rounded-full bg-green-400" />

        <div className="absolute bottom-[20%] left-[20%] h-2 w-2 animate-pulse rounded-full bg-lime-300" />

        <div className="absolute inset-0 bg-[radial-gradient(#4ade8012_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-medium text-lime-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400" />
          Oops! Page not found
        </div>

        <div className="relative mb-3 select-none">
          <h1 className="bg-gradient-to-b from-lime-300 via-green-400 to-emerald-700 bg-clip-text text-[120px] font-black leading-none tracking-tighter text-transparent drop-shadow-[0_0_35px_rgba(74,222,128,0.18)] sm:text-[180px]">
            404
          </h1>

          <div className="absolute inset-0 -z-10 animate-pulse text-[120px] font-black leading-none tracking-tighter text-green-400/10 blur-2xl sm:text-[180px]">
            404
          </div>
        </div>

        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Lost in the <span className="text-lime-400">green?</span>
        </h2>

        <p className="mx-auto mb-9 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
          The page youre looking for doesnt exist or may have been moved.
          Lets get you back to fresh prices and smarter shopping!
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-7 py-3.5 font-bold text-[#07130d] shadow-[0_0_25px_rgba(163,230,53,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-[0_0_35px_rgba(163,230,53,0.3)] sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 10 9-7 9 7" />
              <path d="M9 21V12h6v9" />
            </svg>
            Back to Home
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <button
            onClick={() => router.back()}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:bg-green-400/10 hover:text-lime-300 sm:w-auto"
          >
            ← Go Back
          </button>
        </div>

        <div className="mx-auto mt-14 flex max-w-xs items-center justify-center gap-3 text-xs text-gray-500">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-green-500/30" />
          <span className="tracking-[0.2em]">BAZARDOR</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-green-500/30" />
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
