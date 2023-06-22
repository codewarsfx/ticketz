import ToastProvider from "@/components/ui-elements/Toast-Provider";
import "./globals.css";
import { Inter } from "next/font/google";

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
				<ToastProvider>{children} </ToastProvider>
			</body>
		</html>
	);
}
