import React from "react"

import AbstractBanner from "root/components/AbstractBanner"
import AboutSite from "./home/AboutSite"

class CurriculumVitae extends React.Component {
	render() {
		return (
			<div>
				<AbstractBanner />
				<div
					style={{
						position: "relative",
					}}
				>
					<AboutSite />
				</div>
			</div>
		)
	}
}

export default CurriculumVitae
