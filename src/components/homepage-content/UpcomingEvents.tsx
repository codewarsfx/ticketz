import Image from "next/image";
import Button from "@/components/ui-elements/button";
import { ReactNode } from "react";

export const Header = ({ children }: { children: ReactNode }) => {
	return <div className='text-2xl lg:text-4xl font-bold'>{children}</div>;
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
		<div className='mx-auto  mt-24 w-11/12'>
			<Header>Upcoming Events </Header>
			<Mainflex >
				<div  className="mt-5 lg:mt-0">
					<div className=''>
						<Image
							width={350}
							height={150}
							src='/assets/img/teen.jpg'
							alt=''
							className='w-70 h-60  object-cover rounded-xl '
						/>
						<h2 className='text-xl mt-2 font-bold md:h-16 lg:h-8 '>
							Lagos Teens Calabash
						</h2>
						<p className=' text-sm font-medium text-gray-600 lg:text-xl '>
							July 4th, 2023
						</p>
						<p className='text-sm font-medium  text-gray-600'>
							Lekki conservation center
						</p>

						<Button className='mt-2' buttonType='secondary'>
							See More
						</Button>
					</div>
        </div>
        <div  className="mt-5 lg:mt-0">
					<div className=''>
						<Image
							width={350}
							height={150}
							src='/assets/img/teen.jpg'
							alt=''
							className='w-70 h-60  object-cover rounded-xl '
						/>
						<h2 className='text-xl mt-2 font-bold md:h-16 lg:h-8 '>
							Lagos Teens Calabash
						</h2>
						<p className=' text-sm font-medium text-gray-600 lg:text-xl '>
							July 4th, 2023
						</p>
						<p className='text-sm font-medium  text-gray-600'>
							Lekki conservation center
						</p>

						<Button className='mt-2' buttonType='secondary'>
							See More
						</Button>
					</div>
        </div>
        <div  className="mt-5 lg:mt-0">
					<div className=''>
						<Image
							width={350}
							height={150}
							src='/assets/img/teen.jpg'
							alt=''
							className='w-70 h-60  object-cover rounded-xl '
						/>
						<h2 className='text-xl mt-2 font-bold md:h-16 lg:h-8 '>
							Lagos Teens Calabash
						</h2>
						<p className=' text-sm font-medium text-gray-600 lg:text-xl '>
							July 4th, 2023
						</p>
						<p className='text-sm font-medium  text-gray-600'>
							Lekki conservation center
						</p>

						<Button className='mt-2' buttonType='secondary'>
							See More
						</Button>
					</div>
        </div>
 
        
		
			</Mainflex>
		</div>
	);
}
export default UpcomingEvents;
