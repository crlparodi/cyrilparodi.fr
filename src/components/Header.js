import React from "react";
import "../styles/Header.scss";

class Header extends React.Component {
	navbar() {
		const navbar = (
			<nav className="level-right">
				<p className="level-item">
					<a href=""> Accueil </a>
				</p>
				<p className="level-item">
					<a href="#mii-about"> À propos </a>
				</p>
				<p className="level-item">
					<a href=""> CV </a>
				</p>
				<p className="level-item">
					<a className=""> Portfolio </a>
				</p>
				<p className="level-item">
					<a href="#footer"> Contact </a>
				</p>
			</nav>
		);
		return navbar;
	}

	header_container() {
		const header = (
			<section className="header">
				<div className="level container">
					<div className="level-left">
						<p className="level-item">
							<a href="index.html" className="home">
								{" "}
								CYRIL PARODI{" "}
							</a>
						</p>
					</div>
					<this.navbar />
				</div>
			</section>
		);

		return header;
	}

	render() {
		return this.header_container();
	}
}

export default Header;
