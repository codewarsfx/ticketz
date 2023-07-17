import Image from "next/image";
import Button from "@/components/ui-elements/button";
import { ReactNode } from "react";
import { Calendar, MapPin } from "lucide-react";

export const Header = ({ children }: { children: ReactNode }) => {
	return (
		<div className='font-bold text-2xl lg:text-3xl my-2'>{children}</div>
	);
};

export const Mainflex = ({ children }: { children: ReactNode }) => {
	return (
		<div className='flex flex-col md:flex-row items-center lg:justify-around my-6  gap-4 '>
			{children}
		</div>
	);
};

function UpcomingEvents() {
	return (
		<div className='mx-auto w-11/12 max-w-[1200px]  mt-24'>
			<Header>Upcoming Events </Header>
			<Mainflex>
				<div className='mt-5 lg:mt-0 bg-gray-50 p-8'>
					<div className=''>
						<Image
							width={375}
							height={150}
							src='/assets/img/barbeach.jpg'
							alt=''
							className='w-70 h-60  object-cover rounded-md '
						/>
						<h2 className='text-xl  mt-2 font-bold md:h-16 lg:h-8 '>Party In The USA</h2>
						<div className='flex justify-between '>
							<p className=' text-sm font-medium text-gray-600 lg:text-sm flex items-center '>
								<Calendar className='w-4 h-4 mr-1 text-gray-400' /> July 4th,
								2023
							</p>
							<p className='text-sm font-medium  text-gray-600 flex items-center'>
								<MapPin className='w-4 h-4 text-gray-400 mr-1' /> Lekki
								conservation center
							</p>
						</div>
						<Button className='mt-4 w-full'>See More</Button>
					</div>
				</div>
				<div className='mt-5 lg:mt-0  bg-gray-50 p-8'>
					<div className=''>
						<Image
							width={375}
							height={150}
							src='/assets/img/teen.jpg'
							alt=''
							className='w-70 h-60  object-cover rounded-md '
						/>
						<h2 className='text-xl  mt-2 font-bold md:h-16 lg:h-8 '>
							Barbie Watch Party
						</h2>
						<div className='flex justify-between '>
							<p className=' text-sm font-medium text-gray-600 lg:text-sm flex items-center '>
								<Calendar className='w-4 h-4 mr-1 text-gray-400' /> July 4th,
								2023
							</p>
							<p className='text-sm font-medium  text-gray-600 flex items-center'>
								<MapPin className='w-4 h-4 text-gray-400 mr-1' /> Lekki
								conservation center
							</p>
						</div>
						<Button className='mt-4 w-full'>See More</Button>
					</div>
				</div>
				<div className='mt-5 lg:mt-0  bg-gray-50 p-8'>
					<div className=''>
						<Image
							width={375}
							height={150}
							src='/assets/img/hero-1.jpg'
							alt=''
							className='w-70 h-60  object-cover rounded-md '
						/>
						<h2 className='text-xl  mt-2 font-bold md:h-16 lg:h-8 '>
							The Great Purge
						</h2>
						<div className='flex justify-between '>
							<p className=' text-sm font-medium text-gray-600 lg:text-sm flex items-center '>
								<Calendar className='w-4 h-4 mr-1 text-gray-400' /> July 4th,
								2023
							</p>
							<p className='text-sm font-medium  text-gray-600 flex items-center'>
								<MapPin className='w-4 h-4 text-gray-400 mr-1' /> Lekki
								conservation center
							</p>
						</div>
						<Button className='mt-4 w-full '>See More</Button>
					</div>
				</div>
			</Mainflex>
		</div>
	);
}
export default UpcomingEvents;
