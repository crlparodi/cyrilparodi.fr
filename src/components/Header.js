import React from "react"
import "../styles/Header.scss"
import "../containers/AbstractQueries"

const topics = [
	{
		name: "À propos",
		link: "#mii-about",
	},
	{
		name: "CV",
		link: "",
	},
	{
		name: "Portfolio",
		link: "",
	},
	{
		name: "Contact",
		link: "#footer",
	},
]

class Header extends React.Component {
	navbar() {
		const navbar = (
			<nav className="level-right">
				{topics.map((topic, index) => {
					return (
						<p className="level-item">
							<a className="mii-link" href={topic.link}>
								{topic.name}
							</a>
						</p>
					)
				})}
			</nav>
		)
		return navbar
	}

	header_container() {
		const header = (
			<section className="mii-header mii-dark">
				<div className="level container">
					<div className="level-left">
						<p className="level-item">
							<a href="index.html" className="mii-link">
								{" "}
								CYRIL PARODI{" "}
							</a>
						</p>
					</div>
					<this.navbar />
				</div>
			</section>
		)

		return header
	}

	render() {
		return this.header_container()
	}
}

export default Header
