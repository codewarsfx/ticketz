import { Session, createClient } from "@supabase/supabase-js";

const getSupabaseKeys = () => {
	if (!process.env.NEXT_PUBLIC_SUPABASE_URL)
		throw new Error("Supabase Url Missing From Config File ");
	if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
		throw new Error("Supabase Url Missing From Config File ");

	return {
		supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
		supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	};
};

const { supabaseAnonKey, supabaseUrl } = getSupabaseKeys();

//initialize supabase app
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	auth: {
		persistSession: false, //or true
	},
});

//Google Oauth
export async function signInWithGoogle() {
	let redirectUrl = `http://localhost:3000/signup-dest`;
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: "google",
		options: {
			redirectTo: redirectUrl,
		},
	});

	if (error) console.log(error);
	return data;
}

//supabase session
export async function getSession() {
	const {
		data: { session },
	} = await supabase.auth.getSession();
	return session;
}


//signout
//supabase signout
export async function signout() {
	await supabase.auth.signOut();
}