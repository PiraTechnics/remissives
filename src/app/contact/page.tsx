import Layout from "@/components/Layout";
import { load } from "outstatic/server";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Page() {
	const content = await getData();

	return (
		<Layout>
			<div className="max-w-6xl mx-auto px-5">
				<section className="mt-16 mb-16 md:mb-12">
					<div
						className="prose"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</section>
			</div>
		</Layout>
	);
}

async function getData() {
	const db = await load();

	const page = await db
		.find({ collection: "pages", slug: "contact" }, ["content"])
		.first();

	const content = await markdownToHtml(page?.content || "");

	return content;
}
