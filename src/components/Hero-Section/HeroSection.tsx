import { FC } from "react";
import Button from "../ui-elements/button";
import HeroImage from "./HeroImage";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
	return (
		<div className='flex  justify-center mt-28'>
			<div>
				<h2 className='text-[1.4rem] sm:text-[2.5rem] lg:text-[3.5rem] text-gray-700 text-center font-bold '>
					<span className='gradient-text'>"Unlock </span> the Ultimate
					Experience!
					<br /> Discover. Connect.{" "}
					<span className='gradient-text'>Thrive.</span>"
				</h2>
				<p className='leading-6 w-full sm:w-4/6  mt-5 mx-auto text-center text-sm sm:text-base text-gray-500'>
					Join a vibrant community of like-minded individuals and expand your
					social calendar. Stay in the know with real-time updates on the
					hottest events.
				</p>
				<div className='flex justify-center mt-5'>
					<Button>Buy A Ticket</Button>
				</div>
				<HeroImage />
			</div>
		</div>
	);
};

export default HeroSection;
