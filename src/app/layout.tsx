import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider, AuthProvider } from "@/provider";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	title: "Medinik",
	description: "Made with love by raponikt :)",
	icons: {
		icon: "/assets/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<AuthProvider>
				<ThemeProvider>
					<body className={poppins.className}>{children}</body>
				</ThemeProvider>
			</AuthProvider>
		</html>
	);
}
