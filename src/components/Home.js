import React from "react"

import Intro from "./Home/Intro"
import CVSection from "./Home/CVSection"
import About from "./Home/About"
import AboutSite from "./Home/AboutSite"

import * as HomeData from "../prop_types/homepage.json"

class Home extends React.Component {
	render() {
		return (
			<div>
				<Intro data={HomeData.citation} />
				<CVSection data={HomeData.cv_link} />
				<About />
				<AboutSite data={HomeData.about_site} />
			</div>
		)
	}
}

export default Home
