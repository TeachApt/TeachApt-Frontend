import EducatorSection from "../components/Educators/EducatorSection";
import ExploreCourses from "../components/Explore/ExploreCourses";
import FeaturePage from "../components/Feature/FeaturePage";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import Partners from "../components/Partner/Partners";
import ServicePage from "../components/Services/ServicePage";
import TestimonialSection from "../components/Testimonials/TestimonialSection";


export default function Home() {
  return (
      <main>
        <Navbar />
        <Hero />
        <ServicePage />
        <FeaturePage />
        <ExploreCourses />
        <EducatorSection />
        <TestimonialSection />
        <Partners />
        <Footer />
      </main>
  
  );
}
