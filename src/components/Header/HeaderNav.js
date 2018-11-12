import React from "react"
import "./HeaderNav.scss"

class HeaderNav extends React.Component {
	render() {
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

		return (
			<nav className="mii-header-nav">
				{topics.map((topic, index) => {
					return (
						<a className="mii-link" href={topic.link} key={index}>
							{topic.name}
						</a>
					)
				})}
			</nav>
		)
	}
}

export default HeaderNav
