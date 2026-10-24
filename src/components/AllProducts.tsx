
import Link from "next/link";

interface Products {
  id: number;
  nameBn: string;
  image: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

const AllProducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: Products[] = await res.json();

  return (
    <div className="my-10 px-3 sm:px-5">
      <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 text-center underline mb-6">
        সকল পণ্য
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((singleProduct) => (
          <div key={singleProduct.id} className="min-w-0">
            <Link href={`/product/${singleProduct.id}`}>
              <div className="border-2 p-3 sm:p-4 lg:p-5 rounded-2xl flex flex-col gap-3 h-full">
                <div className="flex items-center gap-3 min-w-0">
                  <h2 className="bg-gray-300 p-2 rounded-2xl shrink-0">
                    <span className="text-4xl sm:text-5xl lg:text-6xl">
                      {singleProduct.image}
                    </span>
                  </h2>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold">
                      {singleProduct.nameBn}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-500 font-bold">
                      প্রতি কেজি
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-end gap-2 mt-auto">
                  <div className="min-w-0">
                    <h2 className="text-gray-500 text-base sm:text-lg font-bold">
                      আজকের দাম
                    </h2>
                    <p className="text-cyan-800 text-lg sm:text-xl font-bold">
                      {singleProduct.today}টাকা
                    </p>
                  </div>

                  {singleProduct.change.dir === "down" ? (
                    <h2 className="bg-red-100 p-2 rounded-xl text-green-800 font-bold whitespace-nowrap shrink-0">
                      ▼ {singleProduct.change.pct}%
                    </h2>
                  ) : singleProduct.change.dir === "up" ? (
                    <h2 className="bg-green-100 p-2 rounded-xl text-red-800 font-bold whitespace-nowrap shrink-0">
                      ▲ {singleProduct.change.pct}%
                    </h2>
                  ) : (
                    <span className="bg-gray-100 p-2 rounded-xl text-gray-800 font-bold text-sm sm:text-base shrink-0">
                      — অপরিবর্তিত
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

