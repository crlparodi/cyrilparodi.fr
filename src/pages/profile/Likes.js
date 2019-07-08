import React from "react"
import Loader from "react-loader-advanced"

/* COMPONENTS */
import Spinner from "root/components/Spinner"

class Likes extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
			showLoader: true,
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
			<section className="Likes isWrapper">
				<div className="Likes-container isContainer">
					<ul className="Likes-grid">
						<div className="Like isStart">
							<div className="Like onCover onStart">
								<div className="LikeSpan isStart">
									<h2 className="ob-title isPrimary">
										{"j'aime."}
									</h2>
								</div>
							</div>
						</div>
						{this.state.data.map((taste, tasteIndex) => {
							return (
								<div className="Like isEntry" key={tasteIndex}>
									<div className="Like onCover">
										<img
											className="LikeImg"
											src={taste.jpg}
										/>
										<div className="LikeSpan isEntry">
											<li>{taste.name}</li>
										</div>
									</div>
								</div>
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
			jpg: "<JPG>",
		},
	],
}

export default Likes
