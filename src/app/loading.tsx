
const LoadingPage = () => {
  return (
    <main className="relative min-h-[80vh] overflow-hidden bg-[#f7faf7] px-4 py-12 sm:px-8">
      {/* Soft green background glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-pulse rounded-full bg-green-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 animate-pulse rounded-full bg-lime-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Loading header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-2xl bg-green-100 text-2xl">
              🛒
            </div>

            <div className="text-left">
              <div className="h-5 w-32 animate-pulse rounded-md bg-green-200" />
              <div className="mt-2 h-3 w-24 animate-pulse rounded bg-gray-200" />
            </div>
          </div>

          <div className="mt-5 h-7 w-56 animate-pulse rounded-lg bg-gray-200 sm:w-72" />

          <p className="mt-4 flex items-center gap-2 text-sm text-green-800">
            <span className="h-2 w-2 animate-ping rounded-full bg-green-500" />
            বাজারদরের সর্বশেষ তথ্য লোড হচ্ছে...
          </p>
        </div>

        {/* Price ticker skeleton */}
        <div className="mb-8 flex gap-4 overflow-hidden rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="min-w-36 flex-1 space-y-3">
              <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
              <div className="h-5 w-24 animate-pulse rounded bg-green-100" />
            </div>
          ))}
        </div>

        {/* Section title */}
        <div className="mb-5 flex items-center justify-between">
          <div className="h-6 w-36 animate-pulse rounded-md bg-gray-200" />
          <div className="h-8 w-24 animate-pulse rounded-lg bg-green-100" />
        </div>

        {/* Product card skeletons */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 animate-pulse items-center justify-center rounded-2xl bg-green-50">
                  <div className="h-8 w-8 animate-pulse rounded-full bg-green-100" />
                </div>

                <div className="flex-1 space-y-3 pt-1">
                  <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                  <div className="h-3 w-1/2 animate-pulse rounded bg-gray-100" />
                  <div className="h-3 w-2/3 animate-pulse rounded bg-gray-100" />
                </div>
              </div>

              <div className="my-5 h-px bg-gray-100" />

              <div className="flex items-end justify-between">
                <div className="space-y-2">
                  <div className="h-3 w-16 animate-pulse rounded bg-gray-100" />
                  <div className="h-6 w-24 animate-pulse rounded bg-green-100" />
                </div>

                <div className="h-8 w-20 animate-pulse rounded-xl bg-lime-100" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom loading indicator */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-green-700 [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-green-600 [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-lime-500" />
        </div>

        <p className="mt-3 text-center text-xs tracking-wide text-gray-400">
          BAZARDOR · SMARTER SHOPPING STARTS HERE
        </p>
      </div>
    </main>
  );
};

export default LoadingPage;
