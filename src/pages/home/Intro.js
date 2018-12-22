import React from "react"
import Loader from "react-loader-advanced"

/* PROP-TYPES */
import PropShapes from "root/prop_types/pages.home"

/* COMPONENTS */
import Spinner from "root/components/Spinner"

/* MEDIAS */
import SelfPic from "img/mii.min.png"

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
		this._isMounted = false
	}
	/*
	 * With the following function, i'm able to update the data on the page
	 * without refreshing it.
	 */
	componentDidMount() {
		this._isMounted = true
		const hdImg = new Image()
		hdImg.src = SelfPic

		hdImg.onload = () => {
			if (this._isMounted) {
				this.setState({
					showLoader: false,
				})
			}
		}
	}
	componentWillUnmount() {
		this._isMounted = false
	}
	render() {
		return (
			<section className="Intro theme-dark">
				<div className="Intro-container Section grid-x grid-padding-x grid-padding-y grid-container">
					<div className="Avatar cell small-auto medium-shrink">
						<Loader
							show={this.state.showLoader}
							message={<Spinner />}
							backgroundStyle={{
								backgroundColor: "rgba(0,0,0,0)",
							}}
							hideContentOnLoad={true}
						>
							<img
								className="Avatar-picture"
								src={SelfPic}
								title="self-picture."
							/>
						</Loader>
					</div>
					<div className="Quote cell auto small-text-center medium-text-justified">
						<q>{this.state.data.quote}</q>
						<p className="text-right">
							{this.state.data.author}, {this.state.data.book} (
							{this.state.data.year})
						</p>
					</div>
				</div>
				<div className="Section isSvg">
					<svg
						className="Section-svg"
						id="bigTriangleColor"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="100%"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<path d="M 0 100.00 l 0 -100 l 50 100.00 l 50 -100 l 0 100" />
						<path
							className="overflow"
							d="M 0 100.00 l 0 -79 l 50 79.00 l 50 -79 l 0 100"
						/>
					</svg>{" "}
				</div>
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
