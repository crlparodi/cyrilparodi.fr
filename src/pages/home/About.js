import React from "react"
import Loader from "react-loader-advanced"

/* PROP-TYPES */
import PropShapes from "root/prop_types/pages.home"

/* COMPONENTS */
import Spinner from "root/components/Spinner"
import CVSection from "./about/CVSection"
import Likes from "./about/Likes"
import SoftSkills from "./about/SoftSkills"

/* MEDIAS */
import SelfPic from "img/mii.min.png"

class About extends React.Component {
	constructor(props) {
		super()
		this.state = {
			About: props.About,
			CVSection: props.CVSection,
			Likes: props.Likes,
			SoftSkills: props.SoftSkills,
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
			<div className="About theme-light">
				<div className="Section isMin grid-container">
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
					<h2 className="ob-title text-center">bonjour !</h2>
					<div className="ob-dialog text-center">
						{this.state.About.map((text_item, index) => {
							return <p key={index}>{text_item}</p>
						})}
					</div>
					<CVSection data={this.state.CVSection} />
				</div>
				<Likes data={this.state.Likes} />
				<div className="mii-min-section container">
					<SoftSkills data={this.state.SoftSkills} />
				</div>
			</div>
		)
	}
}

About.propTypes = {
	About: PropShapes.About,
	CVSection: PropShapes.CVSection,
	Likes: PropShapes.Likes,
	SoftSkills: PropShapes.SoftSkills,
}

export default About
