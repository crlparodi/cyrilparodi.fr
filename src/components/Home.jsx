import React from "react"

import Intro from "./Home/Intro.jsx"
import CVSection from "./Home/CVSection.jsx"
import About from "./Home/About.jsx"
import AboutSite from "./Home/AboutSite.jsx"

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
