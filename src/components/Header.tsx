import { NavLinks } from "./NavLinks";
import Image from "next/image";

const Header = () => {
	return (
		<header className="mx-auto w-full max-w-screen-2xl h-fit text-black border-black border-2">
			<nav className="flex px-4 items-center justify-between h-full mx-auto">
				<Image
					src="/images/logo-placeholder.png"
					width={50}
					height={50}
					alt="Quill and Scroll with typewriter-style words reading 're: missives'"
				/>
				<NavLinks />
			</nav>
		</header>
	);
};

export default Header;
