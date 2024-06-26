import Header from "@/components/Header/Header";
import React, { FC } from "react";

interface layoutProps {
	children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {

	return (
		<div className='mx-auto '>
			{/* <Header /> */}
			{children}
		</div>
	);
};

export default layout;
