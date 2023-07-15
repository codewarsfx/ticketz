"use client";
import React, { FC, ReactNode, useState } from "react";
import reactDOM from "react-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import useStopScroll from "@/Hooks/useStopScroll";

type modalType = {
	children: ReactNode;
	toggleModal: () => void;
};

const Modal: FC<modalType> = ({ children, toggleModal }) => {
	const [container, setContainer] = useState<HTMLElement | null>(null);

	//prevent page scroll when modal is opened
	useStopScroll();

	useEffect(() => {
		const portalContainer = document.createElement("div");
		document?.body?.appendChild(portalContainer);
		setContainer(portalContainer);
		return () => {
			document?.body?.removeChild(portalContainer);
		};
	}, []);

	return (
		container &&
		reactDOM.createPortal(
			<motion.div className='fixed top-0 left-0 h-full w-full z-50'>
				<motion.div
					className='fixed top-0 left-0 h-full w-full backdrop-blur-[8px] op flex cursor-pointer items-center justify-center'
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
						},
					}}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 20,
					}}
					onClick={toggleModal}
				>
					{children}
				</motion.div>
			</motion.div>,
			container
		)
	);
};

export default Modal;
