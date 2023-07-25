import Image from "next/image";
import { FC } from "react";

interface FeaturesProps {}

const Features: FC<FeaturesProps> = ({}) => {
	return (
		<div className='w-11/12 max-w-[1300px] mx-auto'>
			<h1 className='text-2xl text-center lg:text-3xl font-bold my-20'>
				Why Choose Us
			</h1>
			<div className='flex gap-20 w-9/12 h-[450px] mx-auto mt-10 '>
				<div className='relative w-1/2'>
					<Image
						fill
						src='/assets/img/features-1.jpg'
						alt='hero-img'
                        style={{ objectFit: "cover" }}
                        className="rounded-md shadow-lg"
					/>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<h2 className='text-xl mb-5  text-gray-600 font-semibold'>
						Stress Free Event Management
					</h2>
					<p className='text-gray-500 w-[500px] text-lg  leading-9 tra '>
						You can deliver a superior help desk experience for your customers
						through omni-channel support, context-aware ticket tracking, Instant
						Messaging, a self-service portal and multi-lingual support, and all
						in ways the ensuredata privacy and security.
					</p>
				</div>
			</div>
			<div className='flex gap-20 w-9/12 h-[450px] mx-auto mt-10 '>
				<div className='flex flex-col justify-center items-center'>
					<h2 className='text-xl mb-5  text-gray-600 font-semibold'>
						Seamless Payments and Transactions
					</h2>
					<p className='text-gray-500 w-[500px] text-lg  leading-9 tra '>
						You can deliver a superior help desk experience for your customers
						through omni-channel support, context-aware ticket tracking, Instant
						Messaging, a self-service portal and multi-lingual support, and all
						in ways the ensuredata privacy and security.
					</p>
				</div>
				<div className='relative w-1/2  bg-red-100 '>
					<Image
						fill
						src='/assets/img/features-2.jpg'
						alt='hero-img'
                        style={{ objectFit: "cover" }}
                        className="rounded-md shadow-lg"
					/>
				</div>
			</div>
			<div className='flex gap-20 w-9/12 h-[450px] mx-auto mt-10 '>
				<div className='relative w-1/2  bg-red-100 '>
					<Image
						fill
						src='/assets/img/features-3.jpg'
						alt='hero-img'
                        style={{ objectFit: "cover" }}
                        className="rounded-md shadow-lg"
					/>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<h2 className='text-xl mb-5  text-gray-600 font-semibold'>
						Increase the Reach of Your Events
					</h2>
					<p className='text-gray-500 w-[500px] text-lg  leading-9 tra '>
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
