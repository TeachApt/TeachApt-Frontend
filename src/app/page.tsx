import EducatorSection from "../components/Educators/EducatorSection";
import ExploreCourses from "../components/Explore/ExploreCourses";
import FeaturePage from "../components/Feature/FeaturePage";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
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
      </main>
  
  );
}
