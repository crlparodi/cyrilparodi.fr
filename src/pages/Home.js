import React from "react"

/* DATA */
import * as HomeData from "data/pages.home.json"

/* COMPONENTS */
import Banner from "root/components/Banner"
import Intro from "./home/Intro"
import About from "./home/About"
import Mobility from "./home/Mobility"
import AboutSite from "./home/AboutSite"

class Home extends React.Component {
	render() {
		return (
			<section className="mii-homepage">
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
			</section>
		)
	}
}

export default Home
