import Image from "next/image";
import { FC } from "react";

interface HeroImageProps {}

const HeroImage: FC<HeroImageProps> = ({}) => {
	return (
		<div className='mt-20 gap-5 flex items-center'>
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
		</div>
	);
};

export default HeroImage;
