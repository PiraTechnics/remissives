"use client";

import type { OstDocument } from "outstatic";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import defaultAuthor from "@/components/icons/default-author.svg";
import { ShareIcon } from "@heroicons/react/24/outline";

type Item = {
	tags?: { value: string; label: string }[];
} & OstDocument;

type Props = {
	collection: "posts" | "projects";
	title?: string;
	items: Item[];
	priority?: boolean;
};

const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

const ContentPreviews = ({
	title = "More",
	items,
	collection,
	priority = false,
}: Props) => {
	return (
		<section id={collection}>
			{/* <h2 className="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
				{title}
			</h2> */}
			{collection === "posts" && (
				<div>
					{items.map((item, id) => (
						<article
							key={item.slug}
							className={clsx("border border-slate-300 p-2 max-w-4xl my-2", {
								"grid grid-flow-col grid-cols-4": item.coverImage,
							})}
						>
							<section
								className={clsx("grid grid-flow-row", {
									"col-span-3": item.coverImage,
								})}
							>
								{item.author && (
									<div className="flex justify-start gap-2 items-center">
										<Image
											src={item.author.picture || defaultAuthor}
											width={20}
											height={20}
											alt="Picture of the author"
										/>
										<span className="text-slate-500 text-sm">
											{item.author.name}
										</span>
									</div>
								)}
								<h2 className="text-lg font-bold">{item.title}</h2>
								<p className="text-sm text-slate-500">{item.description}</p>
								<div className="mt-6 flex justify-between">
									<p className="text-sm text-slate-500">
										{new Date(item.publishedAt).toDateString()}
									</p>
									<div className="me-4">
										<button
											className="group flex relative cursor-pointer focus:cursor-default"
											onClick={() =>
												navigator.clipboard.writeText(
													`${siteURL}/${collection}/${item.slug}`
												)
											}
										>
											<div className="group-hover:opacity-100 group-focus:opacity-0 transition-opacity bg-gray-800 px-2 pt-1 text-sm text-gray-100 rounded-md absolute -translate-y-10 -translate-x-4 opacity-0 mx-auto">
												<span className="relative z-20">Copy</span>
												<div className="h-2 -translate-x-3 -translate-y-1.5 transform rotate-45 bg-gray-800 origin-bottom rounded-sm" />
											</div>
											<ShareIcon className="w-4 text-slate-500" />
										</button>
									</div>
								</div>
							</section>

							{item.coverImage && (
								<Image
									src={item.coverImage}
									alt={`Cover Image for ${item.title}`}
									className="object-cover w-48 h-auto m-2"
									width={0}
									height={0}
									sizes="(min-width: 768px) 347px, 192px"
									priority={priority && id <= 2}
								/>
							)}
						</article>
					))}
				</div>
			)}
		</section>
	);
};

export default ContentPreviews;
