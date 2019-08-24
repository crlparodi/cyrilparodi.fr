import React from "react"
import Loader from "react-loader-advanced"

/* COMPONENTS */
import Spinner from "root/components/Spinner"

/* MEDIAS */
import SelfPic from "img/mii.min.png"

class About extends React.Component {
	constructor(props) {
		super()
		this.state = {
			showLoader: true,
			data: props.data
		}
		this._isMounted = false
	}
	componentDidMount() {
		this._isMounted = true
		const hdImg = new Image()
		hdImg.src = SelfPic

		hdImg.onload = () => {
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
			<section className="About isWrapper">
				<div className="About isContainer">
					<h2 className="About-title ob-title isPrimary">
						{"en bref"}
					</h2>
					<div className="About-content">
						<div className="Picture">
							<Loader
								show={this.state.showLoader}
								message={<Spinner />}
								backgroundStyle={{
									backgroundColor: "rgba(0,0,0,0)"
								}}
								hideContentOnLoad={true}
							>
								<img src={SelfPic} title="self-picture." />
							</Loader>
						</div>
						<div className="Me">
							<div className="Profile">
								<p>
									<b>{"Nom: "}</b>
									{this.state.data.name}
								</p>
								<p>
									<b>{"Âge: "}</b>
									{this.state.data.age}
								</p>
								<p>
									<b>{"Lieu: "}</b>
									{this.state.data.location}
								</p>
							</div>
							<div className="Facts">
								<p>
									<b>{"Facts: "}</b>
								</p>
								<ul>
									{this.state.data.facts.map(
										(item, itemIndex) => {
											return (
												<li key={itemIndex}>{item}</li>
											)
										}
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default About
