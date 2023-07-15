"use client";
import Image from "next/image";
import { FC } from "react";
import Button from "../ui-elements/button";
import { Icons } from "../ui-elements/icons";
import { useRouter } from "next/router";
import Link from "next/link";

interface SignupProps {
	toggleModal: () => void;
}

const Signup: FC<SignupProps> = ({ toggleModal }) => {
	// const Router = useRouter()
	return (
		<div
			className=' w-11/12 flex h-3/5 max-h-[450px] rounded-lg max-w-3xl bg-white cursor-auto relative'
			onClick={(e) => e.stopPropagation()}
		>
			<span
				className='absolute z-50 top-3 inline-block right-3 cursor-pointer p-1 bg-gray-100 rounded-lg'
				onClick={toggleModal}
			>
				<Icons.X className='w-4 h-4' />
			</span>
			<div className='relative h-full w-2/5 lg:block hidden '>
				<div className='absolute top-0 left-0 w-full h-full bg-indigo-900 z-50 opacity-40 rounded-tl-lg rounded-bl-lg'></div>
				<Image
					fill
					src='/assets/img/party3.jpg'
					alt='hero-img'
					style={{ objectFit: "cover" }}
					className='rounded-tl-lg rounded-bl-lg'
				/>
			</div>

			<div className='relative h-full w-full lg:w-3/5 flex items-center justify-center flex-col'>
				<span className='self-center text-2xl mb-8 inline-block font-semibold text-indigo-600 whitespace-nowrap dark:text-white'>
					TicketZ
				</span>
				<h1 className='text-[20px] font-bold mb-2 text-gray-700'>
					{" "}
					Unlock Unforgettable Experiences
				</h1>
				<h1 className='text-[16px] font-medium mb-8 text-gray-400'>
					{" "}
					Host an Event or Seek One
				</h1>
				<Link href='/signup-dest'>
					<Button
						size='lg'
						buttonType='secondary'
						className='border-gray-900 text-gray-900 hover:scale-105 hover:text-gray-900 hover:border-gray-900'
					>
						{" "}
						<Icons.GoogleLogo className='w-[30px] h-[30px]' /> Continue With
						Google{" "}
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Signup;
