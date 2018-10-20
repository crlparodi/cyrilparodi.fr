import React from "react"
import request from "superagent"

import Loader from "react-loader-advanced"
import Spinner from "../../components/Spinner"

import PropShapes from "../../prop_types/homepage"
import SelfPic from "../../img/mii.png"

import "../../styles/Intro.css"

class Intro extends React.Component {
	constructor(props) {
		super()
		/* NOTE TO MYSELF: When i'm adding a stateless propType to a stateful component,
		 * don't forget to declare the new states from the propTypes
		 */
		this.state = {
			data: props.data,
			showLoader: true,
		}
	}
	/* 
	 * With the following function, i'm able to update the data on the page
	 * without refreshing it.
	 */
	componentDidMount() {
		const hdImg = new Image()
		hdImg.src = SelfPic

		hdImg.onload = () => {
			this.setState({
				showLoader: false,
			})
		}

		return request.get(this.state.data).then((error, response) => {
			return error
				? error
				: this.setState({
					data: this.props.defaultProps,
				  })
		})
	}
	render() {
		return (
			<section className="intro is-widescreen">
				<div className="container">
					<div className="columns has-text-centered">
						<div className="image column is-one-fifth">
							<Loader
								show={this.state.showLoader}
								message={<Spinner />}
								backgroundStyle={{
									backgroundColor: "rgba(0,0,0,0)",
								}}
								hideContentOnLoad={true}
							>
								<img
									className="is-rounded"
									src={SelfPic}
									title="Oui, c'est moi !"
								/>
							</Loader>
						</div>
						<div className="quote column">
							<q className="is-size-4">{this.state.data.quote}</q>
							<p className="author">
								{this.state.data.author}, {this.state.data.book}{" "}
								({this.state.data.year})
							</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

Intro.propTypes = {
	data: PropShapes.citation,
}

Intro.defaultProps = {
	data: {
		quote: "<QUOTE>",
		author: "<AUTHOR>",
		book: "<BOOK>",
		year: "<1770>",
	},
}

export default Intro
