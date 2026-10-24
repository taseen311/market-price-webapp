
import Image from "next/image";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-4 border-2 my-8 mx-3 sm:mx-5 p-4 sm:p-6 lg:p-8 rounded-3xl border-green-600">
      <div className="flex gap-5 sm:gap-6 flex-col w-full lg:w-auto">
        <p className="bg-green-200 w-fit text-green-800 px-4 sm:px-5 font-bold rounded-2xl py-1">
          {date}
        </p>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p className="font-bold text-gray-800">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <button className="btn bg-green-700 text-white w-full sm:w-xs">
          সব পণ্য দেখুন
        </button>
      </div>

      <Image
        height={500}
        width={500}
        src={"/bazar-hero.png"}
        alt="pic of a bucket"
        className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-contain"
      />
    </div>
  );
};

export default Banner;
