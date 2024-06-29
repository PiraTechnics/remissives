import Layout from "../components/Layout";
import { load } from "outstatic/server";
import ContentGrid from "../components/ContentGrid";
import markdownToHtml from "../lib/markdownToHtml";

export default async function Index() {
	const { content, latestPosts } = await getData();

	return (
		<Layout>
			<div className="max-w-6xl mx-auto px-5">
				<section className="mt-16 mb-16 md:mb-12">
					<div
						className="prose lg:prose-2xl home-intro"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</section>
				{latestPosts.length > 0 && (
					<ContentGrid
						title="Latest Posts"
						items={latestPosts}
						collection="posts"
						priority
					/>
				)}
			</div>
		</Layout>
	);
}

async function getData() {
	const db = await load();

	const page = await db
		.find({ collection: "pages", slug: "home" }, ["content"])
		.first();

	const content = await markdownToHtml(page?.content || "");

	const latestPosts = await db
		.find({ collection: "posts" }, [
			"title",
			"publishedAt",
			"slug",
			"coverImage",
			"description",
			"tags",
		])
		.sort({ publishedAt: -1 })
		.limit(6)
		.toArray();

	return {
		content,
		latestPosts,
	};
}
