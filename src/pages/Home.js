import React from "react"

import Banner from "root/components/Banner"
import Intro from "./home/Intro"
import About from "./home/About"
import Mobility from "./home/Mobility"
import AboutSite from "./home/AboutSite"

import * as HomeData from "../prop_types/homepage.json"

class Home extends React.Component {
	render() {
		return (
			<div>
				<Banner />
				<Intro data={HomeData.intro} />
				<About
					About={HomeData.about}
					CVSection={HomeData.cvsection}
					Likes={HomeData.likes}
					SoftSkills={HomeData.softskills}
				/>
				<Mobility data={HomeData.mobility} />
				<AboutSite data={HomeData.aboutsite} />
			</div>
		)
	}
}

export default Home
