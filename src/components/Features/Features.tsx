import Image from "next/image";
import { FC } from "react";

interface FeaturesProps {}

const Features: FC<FeaturesProps> = ({}) => {
	return (
		<div className='w-11/12 max-w-[1300px] mx-auto'>
			<h2 className="text-2xl text-center font-bold text-gray-600 my-10">Why Choose Us</h2>
			<div className="flex gap-20 w-9/12 h-[450px] mx-auto ">
				<div className='relative w-1/2  bg-red-100 '>
					<Image
						fill
						src='/assets/img/grid-1.jpg'
						alt='hero-img'
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-xl mb-5  text-gray-600 font-semibold">Stress Free Event Management</h2>
					<p className="text-gray-500 w-[500px] text-lg  leading-9 tra " > 
						You can deliver a superior help desk experience for your customers
						through omni-channel support, context-aware ticket tracking, Instant
						Messaging, a self-service portal and multi-lingual support, and all
						in ways the ensuredata privacy and security.
					</p>
				</div>
			</div>
			<div>
				<div>
					<h2>Stress Free Event Management</h2>
					<p>
						You can deliver a superior help desk experience for your customers
						through omni-channel support, context-aware ticket tracking, Instant
						Messaging, a self-service portal and multi-lingual support, and all
						in ways the ensuredata privacy and security.
					</p>
				</div>
				<div className='relative'>
					<Image
						fill
						src='/assets/img/grid-1.jpg'
						alt='hero-img'
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
			<div>
				<div className='relative'>
					<Image
						fill
						src='/assets/img/grid-1.jpg'
						alt='hero-img'
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div>
					<h2>Stress Free Event Management</h2>
					<p>
						You can deliver a superior help desk experience for your customers
						through omni-channel support, context-aware ticket tracking, Instant
						Messaging, a self-service portal and multi-lingual support, and all
						in ways the ensuredata privacy and security.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
