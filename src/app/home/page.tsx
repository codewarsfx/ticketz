import HeroSection from "@/components/Hero-Section/HeroSection";
import Host from "@/components/Host/Host";
import UpcomingEvents from "@/components/homepage-content/UpcomingEvents";
import Footer from "@/components/homepage-content/Footer";
import JoinUs from "@/components/homepage-content/JoinUs";
import PictureGrid from "@/components/PictureGrid/PictureGrid";
import Features from "@/components/Features/Features";
export default function homePage() {
	return (
		<>
			<HeroSection />
			<Host />
			<UpcomingEvents />
			<PictureGrid />
			<Features/>
			<JoinUs />
			<Footer />
		</>
	);
	``;
}
