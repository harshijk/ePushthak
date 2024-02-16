import { FeaturedProducts } from "./components/FeaturedProduct";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { useTitle } from "../../Hooks/useTitle";

export const HomePage = () => {
  useTitle("HOMEPAGE")
  return (
    
        <>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
        </>
    
  )
}
