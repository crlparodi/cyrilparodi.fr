import React from "react"

import Intro from "./Home/Intro.js"
import CVSection from "./Home/CVSection.js"
import About from "./Home/About.js"
import AboutSite from "./Home/AboutSite.js"

import HomeData from "../prop_types/homepage.json"

class Home extends React.Component {
	render() {
		return (
			<div>
				<Intro intro_data={HomeData.citation} />
				<CVSection />
				<About />
				<AboutSite content={HomeData.about_site} />
			</div>
		)
	}
}

export default Home
