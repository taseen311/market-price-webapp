
"use client";

import Link from "next/link";
import { useState } from "react";

interface CategoryProduct {
  id: number;
  nameBn: string;
  image: string;
  unit: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

interface Props {
  products: CategoryProduct[];
}

const CategoryProductList = ({ products }: Props) => {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "lowToHigh") {
      return a.today - b.today;
    }

    if (sortBy === "highToLow") {
      return b.today - a.today;
    }

    if (sortBy === "mostIncreased") {
      return b.change.pct - a.change.pct;
    }

    if (sortBy === "mostDecreased") {
      return a.change.pct - b.change.pct;
    }

    return a.id - b.id;
  });

  return (
    <div className="max-w-7xl mx-auto my-10 px-3 sm:px-4">
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">পণ্যের তালিকা</h2>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full sm:w-auto max-w-full border border-gray-300 rounded-xl px-3 sm:px-4 py-3 bg-white text-gray-700 outline-none"
        >
          <option value="default">ডিফল্ট অর্ডার</option>
          <option value="lowToHigh">দাম: কম থেকে বেশি</option>
          <option value="highToLow">দাম: বেশি থেকে কম</option>
          <option value="mostIncreased">দাম বাড়ছে সবচেয়ে বেশি</option>
          <option value="mostDecreased">দাম কমছে সবচেয়ে বেশি</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {sortedProducts.map((singleProduct) => (
          <div key={singleProduct.id} className="min-w-0">
            <Link href={`/product/${singleProduct.id}`}>
              <div className="border-2 p-3 sm:p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                <div className="w-full min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="bg-gray-100 p-2 rounded-2xl shrink-0">
                      <span className="text-4xl sm:text-5xl">
                        {singleProduct.image}
                      </span>
                    </h2>

                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold break-words">
                        {singleProduct.nameBn}
                      </h3>
                      <p className="text-sm text-gray-500 font-bold">
                        প্রতি {singleProduct.unit === "kg" ? "কেজি" : singleProduct.unit}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <h2 className="text-gray-500 font-bold">আজকের দাম</h2>
                    <p className="text-cyan-800 text-lg sm:text-xl font-bold">
                      {singleProduct.today} টাকা
                    </p>
                  </div>
                </div>

                {singleProduct.change.dir === "down" ? (
                  <span className="bg-green-100 p-2 rounded-xl text-green-800 font-bold whitespace-nowrap">
                    ▼ {singleProduct.change.pct}%
                  </span>
                ) : singleProduct.change.dir === "up" ? (
                  <span className="bg-red-100 p-2 rounded-xl text-red-800 font-bold whitespace-nowrap">
                    ▲ {singleProduct.change.pct}%
                  </span>
                ) : (
                  <span className="bg-gray-100 p-2 rounded-xl text-gray-800 font-bold whitespace-nowrap">
                    — অপরিবর্তিত
                  </span>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProductList;
