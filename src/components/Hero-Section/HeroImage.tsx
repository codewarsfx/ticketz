import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";


interface HeroImageProps {}

const HeroImage: FC<HeroImageProps> = ({ }) => {
    
	return (
		<motion.div className='mt-20 gap-5 flex items-center'  initial={{ y:20, opacity:0 }} animate={{
            y:0,  opacity: 1, transition: { delay: 1.7
          }}}>
			<div className='relative w-3/12 h-[150px]'>
				<Image
					fill
					src='/assets/img/hero-1.jpg'
					alt='hero-img'
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className='relative w-3/12 h-[300px]'>
				<Image
					fill
					src='/assets/img/hero-2.jpg'
					style={{ objectFit: "cover" }}
					alt='hero-img'
				/>
			</div>
			<div className='relative w-3/12 h-[250px] '>
				<Image
					fill
					src='/assets/img/hero-3.jpg'
					alt='hero-img'
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className='relative w-3/12 h-[200px] mt-20'>
				<Image
					fill
					src='/assets/img/hero-4.jpg'
					alt='hero-img'
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className='relative w-3/12 h-[300px]'>
				<Image
					fill
					src='/assets/img/hero-5.jpg'
					style={{ objectFit: "cover" }}
					alt='hero-img'
				/>
			</div>
			<div className='relative w-3/12 h-[150px]'>
				<Image
					fill
					src='/assets/img/hero-6.jpg'
					alt='hero-img'
					style={{ objectFit: "cover" }}
				/>
			</div>
		</motion.div>
	);
};

export default HeroImage;
