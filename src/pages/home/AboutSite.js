import React, { Component } from "react"

import PropShapes from "../../prop_types/homepage"

import Button from "../../components/Button"

import "../../styles/AboutSite.scss"

class AboutSite extends Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}
	render() {
		return (
			<section className="mii-about-here mii-section mii-light">
				<div className="bul-tools container is-widescreen">
					<h2 className="mii-title has-text-centered">
						pourquoi ce site ?
					</h2>
					<div className="mii-entry mii-text content has-text-centered">
						{this.state.data.map((e, index) => {
							return <p key={index}>{e}</p>
						})}
					</div>
					<div className="mii-btn-case">
						<Button
							dark={false}
							inner={"github.io"}
							ico={"fab fa-github"}
							url={"https://github.com/crlparodi/project-mii"}
						/>
					</div>
				</div>
			</section>
		)
	}
}

AboutSite.propTypes = {
	data: PropShapes.AboutSite,
}

AboutSite.defaultProps = {
	data: ["<HERE_ABOUT_THE_SITE>"],
}

export default AboutSite
