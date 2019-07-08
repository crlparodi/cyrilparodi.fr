import React from "react"

/* DATA */
import * as ProfileData from "data/pages.profile.json"

/* COMPONENTS */
import Banner from "./profile/Banner"
import About from "./profile/About"
import Likes from "./profile/Likes"
import Human from "./profile/Human"
import Location from "./profile/Location"
import Site from "./profile/Site"

class Profile extends React.Component {
	render() {
		return (
			<div>
				<Banner />
				<About />
				<Likes data={ProfileData.likes} />
				<Human data={ProfileData.humanSkills} />
				<Location />
				<Site />
			</div>
		)
	}
}

export default Profile
