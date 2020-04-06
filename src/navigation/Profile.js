import React from "react"

/* DATA */
import * as ProfileData from "data/pages.profile.json"

/* COMPONENTS */
import Likes from "./profile/Likes"
import Human from "./profile/Human"
import Location from "./profile/Location"
import Site from "./profile/Site"

class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.ref = React.createRef()
	}
	UNSAFE_componentWillUpdate() {
		window.scrollTo(0, this.ref.current.offsetTop - 64)
	}
	render() {
		return (
			<div ref={this.ref}>
				<Likes data={ProfileData.likes} />
				<Human data={ProfileData.humanSkills} />
				<Location />
				<Site />
			</div>
		)
	}
}

export default Profile
