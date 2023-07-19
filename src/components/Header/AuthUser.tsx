import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import AuthUserDropDown from "./AuthUserDropDown";
import useToggleState from "@/Hooks/useToggleState";
import useAuth from "@/Hooks/useAuthContext";

interface AuthUserProps {}

const AuthUser: FC<AuthUserProps> = ({}) => {
	const { isOpen, toggleIsOpen } = useToggleState();
	const user = useAuth();

	return (
		<div
			className='flex relative items-center  rounded-md gap-1 group hover:bg-gray-50 p-2  cursor-pointer'
			onClick={toggleIsOpen}
		>
			<p className='text-sm text-gray-600 font-semibold'>
				Hi {user?.user_metadata.full_name.split(' ')[0]},
			</p>
			<div className='relative rounded-full w-[30px] h-[30px] border border-gray-400'>
				<Image
					fill
					src={user?.user_metadata.avatar_url}
					alt='hero-img'
					style={{ objectFit: "cover", borderRadius: "50%" }}
				/>
			</div>
			<ChevronDown className='w-4 h-4 ml-2' />
			{isOpen && <AuthUserDropDown />}
		</div>
	);
};

export default AuthUser;
