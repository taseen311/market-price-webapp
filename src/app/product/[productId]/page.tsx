
import MarketPrice from "@/components/MarketPrice";

interface ProductDetails {
  params: Promise<{ productId: string }>;
}

const DetailsPage = async ({ params }: ProductDetails) => {
  const { productId } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productId}`,
  );
  const data = await res.json();
  console.log(data);

  return (
    <div className="max-w-7xl mx-auto my-6 sm:my-10 px-3 sm:px-5 lg:px-6">
      <div className="card">
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-5 border-2 border-amber-400 rounded-3xl p-3 sm:p-5">
          <div className="flex flex-col min-[400px]:flex-row items-start min-[400px]:items-center gap-3 sm:gap-4 min-w-0">
            <h2 className="bg-gray-200 text-5xl sm:text-6xl lg:text-7xl border-gray-700 border-2 p-3 sm:p-4 rounded-2xl shrink-0">
              {data.image}
            </h2>

            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold break-words">
                {data.nameBn}
              </h2>

              <p className="text-sm font-bold text-gray-600">
                প্রতি কেজি · চাল
              </p>

              {data.change?.dir === "up" ? (
                <h2 className="break-words">
                  গতকালের তুলনায় আজ দাম বেড়েছে {data.today - data.yesterday}{" "}
                  টাকা
                </h2>
              ) : data.change?.dir === "down" ? (
                <h2 className="break-words">
                  গতকালের তুলনায় আজ দাম কমেছে {data.yesterday - data.today}{" "}
                  টাকা
                </h2>
              ) : (
                <h2>দাম অপরিবর্তিত রয়েছে</h2>
              )}
            </div>
          </div>

          <div className="bg-gray-200 p-3 sm:p-4 rounded-2xl border-2 border-gray-800 w-full sm:w-auto sm:min-w-[136px] sm:shrink-0">
            <p className="font-bold">আজকের দাম</p>

            <h2 className="text-2xl sm:text-3xl text-cyan-600 font-bold text-center">
              {data.today}
            </h2>

            <p>টাকা / কেজি</p>

            <div className="mt-2">
              {data.change.dir === "down" ? (
                <h2 className="bg-red-100 p-2 rounded-xl text-green-800 font-bold whitespace-nowrap text-center">
                  ▼{data.change.pct}%
                </h2>
              ) : data.change.dir === "up" ? (
                <h2 className="bg-green-100 p-2 rounded-xl text-red-800 font-bold whitespace-nowrap text-center">
                  ▲{data.change.pct}%
                </h2>
              ) : (
                <span className="bg-gray-100 p-2 rounded-xl text-gray-800 font-bold block text-center">
                  — অপরিবর্তিত
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <MarketPrice
        markets={data.markets ?? []}
        unit={data.unit ?? "kg"}
      />
    </div>
  );
};

export default DetailsPage;

