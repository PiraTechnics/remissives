import Image from "next/image";
import LinkedIn from "./icons/linkedin";
import Github from "./icons/github";
import Bluesky from "./icons/bluesky";
import Instagram from "./icons/instagram";

const today = new Date();

const socials = [
	{
		name: "Bluesky",
		href: "https://bsky.app/profile/piratechnics.bsky.social",
		icon: Bluesky,
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/piratechnics/",
		icon: Instagram,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/devinyounge/",
		icon: LinkedIn,
	},
	{ name: "Github", href: "https://github.com/piratechnics", icon: Github },
];

const Footer = () => {
	return (
		<footer className="bg-neutral-50 border-t border-neutral-200">
			<div className="mx-auto py-2 flex justify-center gap-4 w-full max-w-6xl h-fit">
				<div className="flex flex-1 flex-col items-center">
					<Image
						src="/images/logo-placeholder.png"
						width={100}
						height={100}
						alt="Quill and Scroll with typewriter-style words reading 're: missives'"
					/>
					<div id="footer-copyright">
						&copy; {today.getFullYear()} Devin Younge
					</div>
				</div>
				<div
					id="footer-socials"
					className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 place-items-center me-4"
				>
					{socials.map((entry) => (
						<div key={`social-${entry.name}`}>
							<a
								href={entry.href}
								aria-label={entry.name}
								target="_blank"
								rel="noopener noreferrer"
							>
								<entry.icon
									size={32}
									classes="fill-black hover:fill-[#3578b5]"
								/>
							</a>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
