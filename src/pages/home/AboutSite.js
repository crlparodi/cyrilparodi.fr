import React, { Component } from "react"

/* PROP-TYPES */
import PropShapes from "root/prop_types/pages.home"

/* COMPONENTS */
import Button from "root/components/Button"

class AboutSite extends Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
		}
	}
	render() {
		return (
			<section className="AboutHere Section theme-light">
				<div className="grid-container">
					<h2 className="ob-title text-center">pourquoi ce site ?</h2>
					<div className="AboutHere-dialog ob-text text-center">
						{this.state.data.map((e, index) => {
							return <p key={index}>{e}</p>
						})}
					</div>
					<div className="AboutHere-button grid-container padding-x">
						<Button
							dark={false}
							inner={"github.io"}
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
