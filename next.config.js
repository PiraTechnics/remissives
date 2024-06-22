// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	async redirects() {
		return [
			{
				//redirect all '/admin' to outstatic cms admin panel
				source: "/admin",
				destination: "/outstatic",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
