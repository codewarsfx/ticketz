"use client";
import { useEffect } from "react";

const useStopScroll = () => {
	//stops body scroll when modal is in view
	useEffect(() => {
		const body = document.querySelector("body")!;

		body.style.overflow = "hidden";

		return () => {
			body.style.overflow = "auto";
		};
	}, []);

	return;
};

export default useStopScroll;
