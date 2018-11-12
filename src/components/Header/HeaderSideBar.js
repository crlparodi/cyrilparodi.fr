import React from "react"
import PropTypes from "prop-types"
import "./HeaderSideBar.scss"

class HeaderSideBar extends React.Component {
	constructor() {
		super()
		this.state = {
			sideBarClasses: "mii-sidebar",
		}
	}

	componentWillReceiveProps = props => {
		this.headerDrawerState(props.show)
	}

	headerDrawerState = prop => {
		if (prop == true) {
			this.setState({ sideBarClasses: "mii-sidebar open" })
		} else {
			this.setState({ sideBarClasses: "mii-sidebar" })
		}
	}
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
			<div className={this.state.sideBarClasses}>
				<div className="mii-nav-mobile">
					{topics.map((topic, index) => {
						return (
							<a
								className="mii-link"
								href={topic.link}
								key={index}
								onClick={this.props.clickHandler}
							>
								{topic.name}
							</a>
						)
					})}
				</div>
			</div>
		)
	}
}

HeaderSideBar.propTypes = {
	show: PropTypes.bool,
	clickHandler: PropTypes.func,
}

export default HeaderSideBar
