import Image from "next/image";
import NavLinks from "./NavLinks";
import DarkmodeToggle from "./DarkmodeTogle";
import Searchbar from "./Searchbar";

const Header = () => {
	return (
		<header className="mx-auto w-full max-w-screen-2xl h-fit text-black mb-8">
			<nav className="flex px-4 items-center justify-around h-full mx-auto">
				<div id="logo-group">
					<Image
						src="/images/logo-placeholder.png"
						width={100}
						height={100}
						alt="Quill and Scroll with typewriter-style words reading 're: missives'"
					/>
				</div>
				<div id="navlink-group">
					<NavLinks />
				</div>
				<div
					id="utility-group"
					className="flex items-center gap-2 max-sm:hidden"
				>
					{/* <DarkmodeToggle />
					<Searchbar /> */}
				</div>
			</nav>
		</header>
	);
};

export default Header;
