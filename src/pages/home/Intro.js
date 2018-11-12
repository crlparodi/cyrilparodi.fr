import React from "react"

import Loader from "react-loader-advanced"
import Spinner from "../../components/Spinner"

import PropShapes from "../../prop_types/homepage"
import SelfPic from "../../img/mii.min.png"

import "../../styles/Intro.scss"

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
	}
	render() {
		return (
			<section className="mii-intro mii-dark" id="mii-intro">
				<div className=" mii-section container">
					<div className="mii-intro-inner columns has-text-centered">
						<div className="mii-self-pic image column is-one-fifth">
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
						<div className="mii-quote column has-text-justified">
							<q className="is-size-4">{this.state.data.quote}</q>
							<p className="author has-text-right">
								{this.state.data.author}, {this.state.data.book}{" "}
								({this.state.data.year})
							</p>
						</div>
					</div>
				</div>
				<svg
					className="mii-svg"
					id="bigTriangleColor"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					width="100%"
					height="100"
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
				>
					<path d="M 0 100.00 l 0 -100 l 50 100.00 l 50 -100 l 0 100" />
					<path
						className="overflow"
						d="M 0 100.00 l 0 -79 l 50 79.00 l 50 -79 l 0 100"
					/>
				</svg>{" "}
			</section>
		)
	}
}

Intro.propTypes = {
	data: PropShapes.Intro,
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
