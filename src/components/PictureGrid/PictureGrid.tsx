import { Rocket } from "lucide-react";
import { PartyPopper } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface PictureGridProps {}

const PictureGrid: FC<PictureGridProps> = ({}) => {
	return (
		<div className='relative my-40 h-[900px] w-full '>
			<div className='w-[350px] bg-white justify-center h-[100px] shadow-lg border border-gray-300  rounded-md  absolute top-[60%] left-[10%] z-10 flex items-center '>
				<p className="font-bold text-lg text-gray-600 mr-2"> We Are Realiable !!!</p> <Rocket   className="w-8 h-8 text-gray-600 "/>
			</div>
            <div className='w-[350px] flex justify-center items-center h-[100px] shadow-lg rounded-md bg-white absolute top-[45%] border border-gray-300 right-[10%] z-10'>
            <p className="font-bold text-lg text-gray-600 mr-2"> We Are Fun!!!</p> <PartyPopper  className="w-8 h-8 text-gray-600"/>
            </div>
			<div className='w-11/12  mx-auto sticky top-[150px] max-w-5xl grid h-[600px] grid-cols-6 gap-1'>
				<div className='relative row-span-2 col-span-2'>
					<Image
						fill
						src='/assets/img/grid-1.jpg'
						alt='hero-img'
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className='relative col-span-3'>
					<Image
						fill
						src='/assets/img/grid-2.jpg'
						alt='hero-img'
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className='relative'>
					<Image
						fill
						src='/assets/img/grid-3.jpg'
						alt='hero-img'
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className='relative col-span-2'>
					<Image
						fill
						src='/assets/img/grid-4.jpg'
						alt='hero-img'
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className=' col-span-1 relative'>
					<Image
						fill
						src='/assets/img/grid-5.jpg'
						alt='hero-img'
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className='relative'>
					<Image
						fill
						src='/assets/img/grid-6.jpg'
						alt='hero-img'
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default PictureGrid;
