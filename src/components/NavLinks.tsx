"use client";

import { usePathname } from "next/navigation";
import { pageLinks } from "@/app/data";
import clsx from "clsx";
import Link from "next/link";

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
							"font-sans max-sm:text-sm py-2 font-semibold hover:text-[#6E07F3]",
							{
								"text-[#6E07F3] border-b-2 border-[#6E07F3]":
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
