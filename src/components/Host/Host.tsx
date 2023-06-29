import { FC } from "react";
import Button from "../ui-elements/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HostProps {}

const Host: FC<HostProps> = ({}) => {
	return (
		<div className='flex justify-around'>
			<div className='relative w-50'>
				<div className='relative w-9/12 h-[300px]'>
					<Image
						fill
						src='/assets/img/host.jpg'
						alt='hero-img'
						style={{ objectFit: "cover" }}
					/>
				</div>

				{/* <Button className='h-10'>Learn More <span className='w-6 h-6 ml-2  bg-gray-100 text-indigo-600 flex items-center justify-center rounded-full' ><ArrowRight className='w-4 h-4' /></span></Button> */}
			</div>
		</div>
	);
};

export default Host;
