import { AuthContext } from "@/context/AuthContex";
import { useContext } from "react";

export default function useAuth() {
	const user = useContext(AuthContext);
	
	return user;
}
