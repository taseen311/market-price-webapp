import MarketPrice from "@/components/MarketPrice";

interface ProductDetails {
  params: Promise<{ productId: string }>;
}

const DetailsPage = async ({ params }: ProductDetails) => {
  const { productId } = await params;
  // console.log(productId)
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productId}`,
  );
  const data = await res.json();
  console.log(data);
  return (
    <div className="max-w-7xl mx-40 my-10">
      <div className="card">
        <div className="flex justify-between border-2 border-amber-400 rounded-3xl p-5">
          <div className="flex items-center gap-4">
            <h2 className="bg-gray-200 text-7xl border-gray-700 border-2 p-3 rounded-2xl">
              {data.image}
            </h2>
            <div>
              <h2 className="text-2xl font-bold">{data.nameBn}</h2>
              <p className="text-sm font-bold text-gray-600">
                প্রতি কেজি · চাল
              </p>
              {data.change?.dir === "up" ? (
                <h2>
                  গতকালের তুলনায় আজ দাম বেড়েছে {data.today - data.yesterday}{" "}
                  টাকা
                </h2>
              ) : data.change?.dir === "down" ? (
                <h2>
                  গতকালের তুলনায় আজ দাম কমেছে {data.yesterday - data.today}{" "}
                  টাকা
                </h2>
              ) : (
                <h2> দাম অপরিবর্তিত রয়েছে</h2>
              )}
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-2xl border-2 border-gray-800">
            <p className="font-bold">আজকের দাম</p>
            <h2 className="text-2xl text-cyan-600 font-bold text-center">
              {data.today}
            </h2>

            <p>টাকা / কেজি</p>
            <p>
              {data.change.dir === "down" ? (
                <h2 className="bg-red-100 p-2 rounded-xl text-green-800 font-bold">
                  ▼{data.change.pct}%
                </h2>
              ) : data.change.dir === "up" ? (
                <h2 className="bg-green-100 p-2 rounded-xl text-red-800 font-bold">
                  ▲{data.change.pct}%
                </h2>
              ) : (
                <span className="bg-gray-100 p-2 rounded-xl text-gray-800 font-bold">
                  — অপরিবর্তিত
                </span>
              )}
            </p>
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
