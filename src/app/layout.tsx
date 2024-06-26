import ToastProvider from "@/components/ui-elements/Toast-Provider";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/context/AuthContex";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Ticketz: Host your event in just one click",
	description: "Host or find exciting events in your area",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AuthProvider>
					<Header/>
					<ToastProvider>{children} </ToastProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
