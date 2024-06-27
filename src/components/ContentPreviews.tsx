"use client";

import type { OstDocument } from "outstatic";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import defaultAuthor from "@/components/icons/default-author.svg";

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
									"col-span-4": !item.coverimage,
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
								<Link href={`/posts/${item.slug}`} className="pb-6">
									<h2 className="text-lg font-bold">{item.title}</h2>
									<p className="text-sm text-slate-500">{item.description}</p>
								</Link>

								<div className="flex justify-between">
									<p className="text-sm text-slate-500">
										{new Date(item.publishedAt).toDateString()}
									</p>
								</div>
							</section>
							{item.coverImage && (
								<section className="col-span-1">
									<Link href={`/posts/${item.slug}`}>
										<Image
											src={item.coverImage}
											alt={`Cover Image for ${item.title}`}
											className="object-cover w-48 h-auto m-2"
											width={0}
											height={0}
											sizes="(min-width: 768px) 347px, 192px"
											priority={priority && id <= 2}
										/>
									</Link>
								</section>
							)}
						</article>
					))}
				</div>
			)}
		</section>
	);
};

export default ContentPreviews;
