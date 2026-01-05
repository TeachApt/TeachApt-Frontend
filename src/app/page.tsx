import FeaturePage from "../components/Feature/FeaturePage";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import ServicePage from "../components/Services/ServicePage";


export default function Home() {
  return (
      <main>
        <Navbar />
        <Hero />
        <ServicePage />
        <FeaturePage />
      </main>
  
  );
}
