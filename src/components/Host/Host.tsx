import { FC } from "react";
import Button from "../ui-elements/button";
import { ArrowRight, BadgeCheck, Mail } from "lucide-react";
import Image from "next/image";
import { MenuSquare } from "lucide-react";

interface HostProps {}

const Host: FC<HostProps> = ({}) => {
	return (
		<div className='mt-24 bg-gray-100 p-20 flex justify-around w-full gap-10'>
			<div className='w-1/2 flex justify-center'>
				<div className='relative w-full sm:w-1/2 h-[450px]'>
					<div className='absolute w-11/12 h-[300px]  top-0 -left-[8%] origin-center bg-gray-300 -rotate-[10deg]'></div>
					<Image
						fill
						src='/assets/img/host.jpg'
						alt='hero-img'
						style={{ objectFit: "cover" }}
					/>
					<div className='absolute top-[75%] left-0 -translate-x-1/2'>
						<Button size='sm' className='h-10'>
							Learn More{" "}
							<span className='w-6 h-6 ml-2  bg-gray-100 text-indigo-600 flex items-center justify-center rounded-full'>
								<ArrowRight className='w-4 h-4' />
							</span>
						</Button>
					</div>
				</div>
			</div>
			<div className='w-1/2'>
				<div className='flex flex-col '>
                    <h2 className='font-bold text-3xl'>
                        
						Unleash the Power of Your Event with Us!
					</h2>
					<div className='border-l-8 mt-10  px-4 border-gray-300'>
						<p className='text-gray-600 leading-8'>
							When it comes to hosting your event, we have got you covered from
							start to finish. Our platform is the ultimate destination for
							event organizers like you, offering an array of benefits that make
							us the top choice.
						</p>
					</div>
					<div className='mt-10 w-7/12 mx-auto'>
						<h2 className='font-bold text-center text-2xl'>We Help You</h2>
						<div className="flex justify-between  mt-5">
							<div className='flex flex-col items-center'>
								<BadgeCheck className='w-20 h-20 text-gray-600' />
								<p className='text-gray-600 leading-8 font-semibold'>Verify</p>
                            </div>
                            <div className='flex flex-col items-center'>
								<MenuSquare    className='w-20 h-20 text-gray-600' />
								<p className='text-gray-600 leading-8 font-semibold'>Organize</p>
                            </div>
                            <div className='flex flex-col items-center'>
								<Mail  className='w-20 h-20 text-gray-600' />
								<p className='text-gray-600 leading-8 font-semibold'>Reach Out</p>
							</div>
                    
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Host;
