import Link from "next/link";
interface Category{
    nameBn: string
    icon: string
    slug: string
}


const Navlinks = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
    const data: Category[] = await res.json();

    return (
        <div className="flex gap-10 max-w-xl mx-auto">
           {
            data.map((cat , ind) => <Link key={ind} href={`/category/${cat.slug}`}>
                {cat.icon}
                {cat.nameBn}</Link>)
           }        
        </div>
    );
};

export default Navlinks;