
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Marquee {
  id: number
  image: string
  nameBn: string
  today: number
  change: {
    dir: string
    pct: number
  }
}

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: Marquee[] = await res.json();
  console.log(data);

  return (
    <div className="border-y mt-3 px-1 py-2 border-gray-800 w-full overflow-hidden">
      <MarqueeText direction="right" duration={15}>
        {data.map((product) => (
          <span className="py-2 text-base sm:text-lg lg:text-xl whitespace-nowrap inline-flex items-center gap-1 sm:gap-2" key={product.id}>
            <span>{product.image}</span>
            <span>{product.nameBn}</span>
            <span>{product.today} টাকা/কেজি</span>
            <span>
              {product.change.dir === "up" ? (
                <span className="text-green-600"> ▲ {product.change.pct}%</span>
              ) : (
                <span className="text-red-700"> ▼ {product.change.pct}%</span>
              )}
            </span>
            <span> | </span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;

