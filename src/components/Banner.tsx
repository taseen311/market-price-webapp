import Image from "next/image";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="flex justify-around items-center border-2 my-8 rounded-3xl border-green-600">
      <div className="flex gap-6 flex-col">
        <p className="bg-green-200 w-fit text-green-800 px-5  font-bold rounded-2xl py-1">{date}</p>
        <h1 className="text-4xl font-bold">আজকের বাজারের দাম এক নজরে</h1>
        <p className="font-bold text-gray-800">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, <br />সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <button className="btn bg-green-700 text-white w-xs">সব পণ্য দেখুন</button>
      </div>
      <Image
        height={500}
        width={500}
        src={"/bazar-hero.png"}
        alt="pic of a bucket"
      />
    </div>
  );
};

export default Banner;
