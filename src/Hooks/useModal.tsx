'use client'
import { FC, useState } from "react";

const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen((prevState) => !prevState);
	};

	return { isOpen, toggleModal };
};

export default useModal;
