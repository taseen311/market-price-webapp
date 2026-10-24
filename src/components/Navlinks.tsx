
import Link from "next/link";

interface Category {
    nameBn: string
    icon: string
    slug: string
}

const Navlinks = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data: Category[] = await res.json();

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 w-max min-w-full sm:w-fit sm:min-w-0 sm:max-w-full sm:mx-auto px-3 sm:px-4 py-2">
                {
                    data.map((cat, ind) => (
                        <Link
                            key={ind}
                            href={`/category/${cat.slug}`}
                            className="flex items-center gap-1 whitespace-nowrap shrink-0"
                        >
                            <span>{cat.icon}</span>
                            <span>{cat.nameBn}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Navlinks;
