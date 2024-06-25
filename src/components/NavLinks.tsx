"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const pageLinks = [
	{ name: "Home", href: "/" },
	{ name: "Posts", href: "/posts" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<div className="flex gap-4 lg:gap-6">
			{pageLinks.map((link) => {
				return (
					<Link
						key={"nav-" + link.name}
						href={link.href}
						className={clsx(
							"font-sans max-sm:text-sm py-2 font-semibold hover:text-[#3578b5]",
							{
								"text-[#3578b5] border-b-2 border-[#3578b5]":
									pathname === link.href,
							}
						)}
					>
						{link.name}
					</Link>
				);
			})}
		</div>
	);
}
