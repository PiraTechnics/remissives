import Footer from "./Footer";
import Header from "./Header";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
