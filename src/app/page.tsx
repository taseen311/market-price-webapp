import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import Decreased from "@/components/Decreased";
import Increased from "@/components/Increased";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-52 ">
       <Banner/>
       <Increased/>
       <Decreased/>
       <AllProducts/>
    </div>
  );
}
