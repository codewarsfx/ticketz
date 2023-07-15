"use client";
import useToggleState from "@/Hooks/useToggleState";
import Header from "@/components/Header/Header";
import Signup from "@/components/SignUp/signup";
import Modal from "@/components/ui-elements/modal";
import React, { FC } from "react";

interface layoutProps {
	children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
	const { isOpen, toggleIsOpen: toggleModal } = useToggleState();
	return (
		<div className='mx-auto '>
			<Header toggleModal={toggleModal} />
			{children}
			{isOpen && (
				<Modal toggleModal={toggleModal}>
					<Signup toggleModal={toggleModal} />
				</Modal>
			)}
		</div>
	);
};

export default layout;
