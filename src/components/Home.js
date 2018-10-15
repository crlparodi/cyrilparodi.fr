import React from "react"

import Intro from "./Home/Intro"
import CVSection from "./Home/CVSection"
import About from "./Home/About"
import AboutSite from "./Home/AboutSite"

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
