"use client";
import { FC } from "react";
import Button from "../ui-elements/button";
import { motion } from "framer-motion";
import { BASE_ANIMATION_DELAY, BASE_ANIMATION_DURATION } from "@/lib/utils";
import useAuth from "@/Hooks/useAuthContext";

interface HeaderProps {
	toggleModal: () => void
}

const Header: FC<HeaderProps> = ({toggleModal}) => {
	//animations states
	const initialState = { y: -10, opacity: 0 };
	const animateTo = {
		y: 0,
		opacity: 1,
		transition: {
			delay: BASE_ANIMATION_DELAY,
			duration: BASE_ANIMATION_DURATION,
		},
    };
    

	motion;
	return (
		<div className="w-11/12 w-max-[1300px] mx-auto">
			<motion.nav
				initial={initialState}
				animate={animateTo}
				className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'
			>
				<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
					<a href='/' className='flex items-center'>
						<span className='self-center text-2xl font-semibold text-indigo-600 whitespace-nowrap dark:text-white'>
							TicketZ
						</span>
					</a>
					<div className='flex md:order-2'>
						<Button className='hidden sm:flex' onClick={toggleModal}> Sign Up</Button>
						<button
							data-collapse-toggle='navbar-sticky'
							type='button'
							className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
							aria-controls='navbar-sticky'
							aria-expanded='false'
						>
							<span className='sr-only'>Open main menu</span>
							<svg
								className='w-6 h-6'
								aria-hidden='true'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clipRule='evenodd'
								></path>
							</svg>
						</button>
					</div>
					<div
						className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
						id='navbar-sticky'
					>
						<ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
							<li>
								<a
									href='#'
									className='block  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
									aria-current='page'
								>
									<Button className='px-4' buttonType='ghost'>
										Host
									</Button>
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
									aria-current='page'
								>
									<Button className='px-4' buttonType='ghost'>
										Find an event
									</Button>
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
									aria-current='page'
								>
									<Button className='px-4' buttonType='ghost'>
										About us
									</Button>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</motion.nav>
		</div>
	);
};

export default Header;
