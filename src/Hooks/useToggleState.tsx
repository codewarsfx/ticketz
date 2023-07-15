import { useState } from "react";

const useToggleState = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen((prevState) => !prevState);
	};

	return { isOpen, toggleIsOpen };
};

export default useToggleState;