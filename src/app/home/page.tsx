import HeroSection from "@/components/Hero-Section/HeroSection";
import Host from "@/components/Host/Host";
import UpcomingEvents from "@/components/homepage-content/UpcomingEvents";
import Footer from "@/components/homepage-content/Footer";
import JoinUs from "@/components/homepage-content/JoinUs";
import Testimonials from "@/components/homepage-content/testimonials";

export default function homePage() {
  return (
    <>
      <HeroSection />
      <Host />
      <UpcomingEvents />
      <Testimonials />
      <JoinUs />
      <Footer />
    </>
  );
  ``;
}
