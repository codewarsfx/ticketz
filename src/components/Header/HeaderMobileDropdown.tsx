import {
	BadgeDollarSign,
	Ghost,
	HelpCircle,
	Hotel,
	Search,
} from "lucide-react";
import { FC } from "react";
import { motion } from "framer-motion";

interface HeaderMobileDropdownProps {}

const HeaderMobileDropdown: FC<HeaderMobileDropdownProps> = ({}) => {
	//animations states
	const initialState = { opacity: 0 };
	const animateTo = {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	};
	return (
		<motion.div
			className='w-11/12 bg-white shadow-md fixed top-20 left-1/2 -translate-x-1/2 z-50 border border-gray-200 rounded-md'
			initial={initialState}
			animate={animateTo}
		>
			<nav>
				<ul>
					<li className='my-2 hover:bg-indigo-200 group '>
						<a
							href='/#'
							className='p-4 group-hover:text-indigo-600 group-hover:bg-indigo-200  flex items-center'
						>
							<Hotel className='w-6 h-6 text-gray-500 mr-2 group-hover:text-indigo-600 ' />
							Host{" "}
						</a>
					</li>
					<li className='my-2 hover:bg-indigo-200 group '>
						<a
							href='/#'
							className='p-4 group-hover:text-indigo-600 group-hover:bg-indigo-200  flex items-center'
						>
							<Search className='w-6 h-6 text-gray-500 mr-2 group-hover:text-indigo-600' />
							Find an event{" "}
						</a>
					</li>
					<li className='my-2 hover:bg-indigo-200 group '>
						<a
							href='/#'
							className='p-4 group-hover:text-indigo-600 group-hover:bg-indigo-200  flex items-center'
						>
							<HelpCircle className='w-6 h-6 text-gray-500 mr-2 group-hover:text-indigo-600 ' />{" "}
							About us{" "}
						</a>
					</li>
					<li className='my-2 hover:bg-indigo-200 group '>
						<a
							href='/#'
							className='p-4 group-hover:text-indigo-600 group-hover:bg-indigo-200  flex items-center'
						>
							<BadgeDollarSign className='w-6 h-6 text-gray-500 mr-2 group-hover:text-indigo-600 ' />
							Pricing{" "}
						</a>
					</li>
				</ul>
			</nav>
		</motion.div>
	);
};

export default HeaderMobileDropdown;
