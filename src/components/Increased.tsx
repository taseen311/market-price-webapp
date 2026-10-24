import Link from "next/link"

interface UpPrice {
    id: number
    nameBn: string
    image: string
    today: number
    change: {
        dir: string
        pct: number
    }
}

const Increased = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: UpPrice[] = await res.json();
  const top6Up = data
    .filter((data) => data.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <div className="my-10">
      <h2 className="text-2xl">
        <span className="text-red-600">▲</span> আজ দাম বেড়েছে
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {top6Up.map((singleProduct) => (
          <div key={singleProduct.id}>
             <Link href={`/product/${singleProduct.id}`}>
                 <div className="border-2 p-5 rounded-2xl flex justify-between items-end">
              <div className="">
                <div className="flex items-center gap-2">
                <h2 className="bg-gray-300 p-2 rounded-2xl"><span className="text-6xl">{singleProduct.image}</span></h2>
                <div>
                  <h3 className="text-2xl font-bold">{singleProduct.nameBn}</h3>
                  <p className="text-xl text-gray-500 font-bold">প্রতি কেজি</p>
                </div>
              </div>
              <div className="mt-3">
                <h2 className="text-gray-500 text-xl font-bold">আজকের দাম</h2>
                <p className="text-red-500 text-xl font-bold">{singleProduct.today}টাকা</p>
              </div>
              </div>
              <h2 className="bg-green-100 p-2 rounded-xl text-red-800 font-bold">▲{singleProduct.change.pct}%</h2>
            </div>
             </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Increased;
