import CategoryProductList from "@/components/CategoryProductList"

interface Category {
    id: number
    unit: string
    nameBn: string
    image: string
    today: number
    change: {
        dir: string
        pct: number
    }
}

const CategoryProducts = async ({ params }:{params:{categoryId: string}}) => {
  const { categoryId } = await params;
  // console.log(categoryId);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );
  const data:Category[]= await res.json();
  console.log(data);

  return (
   
      // <div className="grid grid-cols-3 gap-3 max-w-7xl mx-50 my-10">
      //   {data.map((singleProduct) => (
      //     <div key={singleProduct.id}>
      //       <div className="border-2 p-5 rounded-2xl flex justify-between items-end">
      //         <div className="">
      //           <div className="flex items-center gap-2">
      //           <h2 className="bg-gray-300 p-2 rounded-2xl"><span className="text-6xl">{singleProduct.image}</span></h2>
      //           <div>
      //             <h3 className="text-xl font-bold">{singleProduct.nameBn}</h3>
      //             <p className="text-xl text-gray-500 font-bold">প্রতি কেজি</p>
      //           </div>
      //         </div>
      //         <div className="mt-3">
      //           <h2 className="text-gray-500 text-xl font-bold">আজকের দাম</h2>
      //           <p className="text-cyan-800 text-xl font-bold">{singleProduct.today}টাকা</p>
      //         </div>
      //         </div>
      //         {
      //           singleProduct.change.dir === "down" ?   <h2 className="bg-red-100 p-2 rounded-xl text-green-800 font-bold">▼
      //           {singleProduct.change.pct}%</h2> : singleProduct.change.dir === "up" ? <h2 className="bg-green-100 p-2 rounded-xl text-red-800 font-bold">▲{singleProduct.change.pct}%</h2>:  <span className="bg-gray-100 p-2 rounded-xl text-gray-800 font-bold">— অপরিবর্তিত</span>
      //         }
      //       </div>
      //     </div>
      //   ))}
      // </div>
      <CategoryProductList products={data}/>
  );
};

export default CategoryProducts;
