interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface MarketPriceTableProps {
  markets: Market[];
  unit: string;
}

const MarketPrice = ({ markets, unit }: MarketPriceTableProps) => {
    
const lowestPrice = Math.min(...markets.map((market) => market.min));

const highestPrice = Math.max(...markets.map((market) => market.max));

const overallAverage =
  markets.length > 0
    ? markets.reduce(
        (total, market) => total + (market.min + market.max) / 2,
        0
      ) / markets.length
    : 0;

  return (
  <div>
    <h2 className="text-2xl font-bold text-cyan-800 mb-2 mt-8">দামের সারসংক্ষেপ</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
  <div className="bg-green-50 border border-green-200 p-5 rounded-2xl">
    <p className="text-green-700 font-medium">
      সর্বনিম্ন দাম
    </p>
    <h3 className="text-3xl font-bold text-green-800 mt-2">
      ৳{markets.length > 0 ? lowestPrice : "—"}
    </h3>
    <h2>  সবচেয়ে কম দামের বাজার</h2>
  </div>

  <div className="bg-red-50 border border-red-200 p-5 rounded-2xl">
    <p className="text-red-700 font-medium">
      সর্বোচ্চ দাম
    </p>
    <h3 className="text-3xl font-bold text-red-800 mt-2">
      ৳{markets.length > 0 ? highestPrice : "—"}
    </h3>
    <h2>সবচেয়ে বেশি দামের বাজার</h2>
  </div>

  <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl">
    <p className="text-blue-700 font-medium">
      সামগ্রিক গড় দাম
    </p>
    <h3 className="text-3xl font-bold text-blue-800 mt-2">
      ৳{markets.length > 0 ? overallAverage.toFixed(2) : "—"}
    </h3>
    <p className="text-sm text-gray-500 mt-1">
      প্রতি {unit === "kg" ? "কেজি" : unit}
    </p>
  </div>
</div>


      <div className="mt-8">
      <h2 className="text-2xl font-bold text-cyan-800 mb-2">
        বাজারভিত্তিক দামের তুলনা
      </h2>

      <p className="text-gray-500 mb-5">
        বিভিন্ন বাজারে পণ্যের সর্বনিম্ন ও সর্বোচ্চ দাম
      </p>

      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full text-left">
          <thead className="bg-cyan-800 text-white">
            <tr>
              <th className="p-4">বাজারের নাম</th>
              <th className="p-4">বিভাগ</th>
              <th className="p-4">সর্বনিম্ন দাম</th>
              <th className="p-4">সর্বোচ্চ দাম</th>
              <th className="p-4">গড় দাম</th>
            </tr>
          </thead>

          <tbody>
            {markets.map((market, index) => {
                 const averagePrice = (market.min + market.max) / 2;

             return(
                 <tr
                key={`${market.market}-${index}`}
                className="border-b last:border-b-0 hover:bg-cyan-50"
              >
                <td className="p-4 font-medium">{market.market}</td>

                <td className="p-4">{market.division}</td>

                <td className="p-4 font-bold text-green-700">৳{market.min}</td>

                <td className="p-4 font-bold text-red-600">৳{market.max}</td>

                <td className="p-4 text-blue-700 font-bold">
                  ৳{averagePrice.toFixed(2)}
                </td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-500 mt-3">
        দাম প্রতি {unit === "kg" ? "কেজি" : unit} হিসেবে দেখানো হয়েছে।
      </p>
    </div>
  </div>
  );
};

export default MarketPrice;
