"use client";
import { getSession } from "@/lib/supabase";
import { Session, UserAttributes } from "@supabase/supabase-js";
import { ReactNode, createContext, useEffect, useState } from "react";

export const AuthContext = createContext<UserAttributes | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<UserAttributes | null>(null);

	//get user's details
	useEffect(() => {
		async function getUser() {
			const session: Session | null = await getSession();
			if (session) {
				return setUser(session.user);
			}
			return setUser(null);
		}
		getUser();
	}, []);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
