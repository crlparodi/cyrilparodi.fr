import React from "react"
import request from "superagent"
import PropShapes from "../../prop_types/homepage"
import SelfPic from "../../img/mii.jpg"
import "../../styles/Intro.css"

class Intro extends React.Component {
	constructor(props) {
		super()
		/* NOTE TO MYSELF: When i'm adding a stateless propType to a stateful component,
		 * don't forget to declare the new states from the propTypes
		 */
		this.state = {
			intro_data: props.intro_data,
		}
	}
	/* 
	 * With the following function, i'm able to update the data on the page
	 * without refreshing it.
	 */
	componentDidMount = () => {
		return request.get(this.props.intro_data).end(
			function(error, response) {
				return error
					? error
					: this.setState({
							resume: response.body,
					  })
			}.bind(this),
		)
	}
	render() {
		return (
			<section className="intro is-widescreen">
				<div className="container">
					<div className="columns has-text-centered">
						<div className="image column is-one-fifth">
							<img
								className="is-rounded"
								src={SelfPic}
								alt="Oui, c'est moi !"
							/>
						</div>
						<div className="quote column">
							<q className="is-size-4">
								{this.state.intro_data.quote}
							</q>
							<p class="author">
								{this.state.intro_data.author},{" "}
								{this.state.intro_data.book} (
								{this.state.intro_data.year})
							</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

Intro.propTypes = {
	intro_data: PropShapes.citation,
}

Intro.defaultProps = {
	intro_data: {
		quote: "<QUOTE>",
		author: "<AUTHOR>",
		book: "<BOOK>",
		year: "<1770>",
	},
}

export default Intro
