import { FC } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, User2 } from "lucide-react";
import { LogOut } from "lucide-react";

interface AuthUserDropDownProps {}

const AuthUserDropDown: FC<AuthUserDropDownProps> = ({}) => {
	return (
		<motion.div
			className='w-[200px] bg-white shadow-md absolute top-10 left-25 -translate-x-1/2 z-50 border border-gray-200 rounded-md'
			//   initial={initialState}
			//   animate={animateTo}
		>
			<nav>
				<ul>
					<li className='my-2 hover:bg-gray-50 group '>
						<a
							href='/#'
							className='px-4 py-2 text-sm  flex items-center text-gray-500 group-hover:text-gray-600'
						>
							<User2  className="w-4 h-4 mr-2"/>
							Your Profile
						</a>
					</li>
					<li className='my-2 hover:bg-gray-50 group '>
						<a
							href='/#'
                            className='px-4 py-2  text-sm  flex items-center  text-gray-500 group-hover:text-gray-600'
						>
							<CalendarCheck className="w-4 h-4 mr-2" />
							Your Events
						</a>
					</li>
					<li className='my-2 hover:bg-gray-50 group'>
						<a
							href='/#'
                            className='px-4 py-2  text-sm  flex items-center  text-gray-500 group-hover:text-gray-600'
						>
							<LogOut className="w-4 h-4 mr-2" />
							Logout
						</a>
					</li>
				</ul>
			</nav>
		</motion.div>
	);
};

export default AuthUserDropDown;
