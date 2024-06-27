import Layout from "../../components/Layout";
import { load } from "outstatic/server";
import ContentPreviews from "@/components/ContentPreviews";
export default async function Posts() {
	const allPosts = await getData();

	return (
		<Layout>
			<div className="max-w-6xl mx-auto px-5">
				{/* 				<section className="mt-16 mb-16 md:mb-12">
					<div
						className="prose lg:prose-2xl home-intro"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</section> */}
				{allPosts.length > 0 && (
					<ContentPreviews
						title="All Posts"
						items={allPosts}
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

	const allPosts = await db
		.find({ collection: "posts" }, [
			"title",
			"publishedAt",
			"slug",
			"coverImage",
			"description",
			"tags",
			"author",
		])
		.sort({ publishedAt: -1 })
		.toArray();

	return allPosts;
}
