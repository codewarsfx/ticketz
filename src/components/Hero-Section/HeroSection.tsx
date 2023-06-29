"use client";
import { FC } from "react";
import Button from "../ui-elements/button";
import HeroImage from "./HeroImage";
import { motion } from "framer-motion";
import { BASE_ANIMATION_DELAY, BASE_ANIMATION_DURATION } from "@/lib/utils";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
	const initialStateTagline = { y: 20, opacity: 0 };
	const animateToTagline = {
		y: 0,
		opacity: 1,
		transition: {
			delay: BASE_ANIMATION_DELAY + BASE_ANIMATION_DURATION + 0.2,
		},
	};

	const initialStateSecondary = { opacity: 0 };
	const animateToSecondary = {
		opacity: 1,
		transition: {
			delay: BASE_ANIMATION_DURATION + 1,
		},
	};
	return (
		<div className='flex  justify-center mt-28'>
			<div>
				<motion.h2
					className='text-[1.4rem] sm:text-[2.5rem] lg:text-[3.5rem] text-gray-700 text-center font-bold '
					initial={initialStateTagline}
					animate={animateToTagline}
				>
					<span className='gradient-text'>&quot;Unlock </span> the Ultimate
					Experience!
					<br /> Discover. Connect.{" "}
					<span className='gradient-text'>Thrive.&quot;</span>
				</motion.h2>
				<motion.p
					className='leading-6 w-full sm:w-4/6  mt-5 mx-auto text-center text-sm sm:text-base text-gray-500'
					initial={initialStateSecondary}
					animate={animateToSecondary}
				>
					Join a vibrant community of like-minded individuals and expand your
					social calendar. Stay in the know with real-time updates on the
					hottest events.
				</motion.p>
				<motion.div
					className='flex justify-center mt-5'
					initial={initialStateSecondary}
					animate={animateToSecondary}
				>
					<Button>Buy A Ticket</Button>
				</motion.div>
				<HeroImage />
			</div>
		</div>
	);
};

export default HeroSection;
