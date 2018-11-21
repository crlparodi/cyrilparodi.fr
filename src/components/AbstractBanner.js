import React from "react"
import IMG from "../img/blur.min.jpg"
import "./AbstractBanner.scss"

class AbstractBanner extends React.Component {
	constructor(props) {
		super()
		/* NOTE TO MYSELF: When i'm adding a stateless propType to a stateful component,
		 * don't forget to declare the new states from the propTypes
		 */
		this.state = {
			data: props.data,
		}
	}
	render() {
		return (
			<section
				className="mii-abstract-banner mii-dark"
				style={{ backgroundImage: "url(" + IMG + ")" }}
			>
				<div className="mii-section container">
					<h1 className="mii-banner">
						INGÉNIEUR EN DÉVELOPPEMENT LOGICIEL
					</h1>
					<h2 className="mii-banner-subtitle">
						près de Aix-en-Provence, Provence-Alpes-Côte d'Azur,
						FRANCE
					</h2>
				</div>
			</section>
		)
	}
}

AbstractBanner.propTypes = {}

AbstractBanner.defaultProps = {}

export default AbstractBanner
