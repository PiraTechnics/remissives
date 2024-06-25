import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://remissives.com"),
	title: {
		default: "Re: Missives",
		template: "%s | Remissives",
	},
	description: "A blog of all and sundry",
	openGraph: {
		title: "Re: Missives",
		description: "A blog of all and sundry",
		url: absoluteUrl("/"),
		siteName: "ReMissives",
		images: [
			{
				url: absoluteUrl("/images/og-image.png"),
				width: 1800,
				height: 1600,
			},
		],
		locale: "en_US",
		type: "website",
	},
	icons: {
		icon: [{ url: "/favicon/favicon-32x32.png" }],
		apple: [{ url: "/favicon/apple-touch-icon.png" }],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
