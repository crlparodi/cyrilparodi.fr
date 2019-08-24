import React from "react"
import Loader from "react-loader-advanced"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

/* COMPONENTS */
import Spinner from "root/components/Spinner"

class Likes extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
			showLoader: true
		}
		this._isMounted = false
	}
	componentDidMount() {
		this._isMounted = true
		const likeImg = new Image()
		likeImg.src = this.state.data.jpg

		likeImg.onLoad = () => {
			if (this._isMounted) {
				this.setState({
					showLoader: false
				})
			}
		}
	}
	componentWillUnmount() {
		this._isMounted = false
	}
	render() {
		return (
			<section className="Likes isWrapper">
				<div className="Likes-container isContainer">
					<h2 className="ob-title isPrimary">{"Ce que j'aime"}</h2>
					<ul className="Likes-grid">
						{this.state.data.map((taste, tasteIndex) => {
							return (
								<VisibilitySensor
									partialVisibility
									key={tasteIndex}
								>
									{({ isVisible }) => (
										<Spring
											config={{
												duration: 300
											}}
											to={{
												opacity: isVisible ? 1 : 0,
												transform: isVisible
													? "translateY(0)"
													: "translateY(80px)"
											}}
										>
											{props => (
												<div
													className="Like isEntry"
													style={{ ...props }}
												>
													<div className="Like onCover">
														<img
															className="LikeImg"
															src={taste.jpg}
														/>
														<div className="LikeSpan isEntry">
															<li>
																{taste.name}
															</li>
														</div>
													</div>
												</div>
											)}
										</Spring>
									)}
								</VisibilitySensor>
							)
						})}
					</ul>
				</div>
			</section>
		)
	}
}

Likes.defaultProps = {
	data: [
		{
			name: "<NONE>",
			jpg: "<JPG>"
		}
	]
}

export default Likes
