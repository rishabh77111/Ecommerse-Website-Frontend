import Categories from "@/components/client/landing/categories";
import FeaturedProducts from "@/components/client/landing/featured-products";
import Hero from "@/components/client/landing/hero";
import NewArrivals from "@/components/client/landing/new-arrivals";


export default function Home() {
  return (
    <main>
      <Hero />

      {/*categories */}
      <Categories />
      <FeaturedProducts />
      <NewArrivals />
    </main>

  );
}
