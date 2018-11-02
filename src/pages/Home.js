import React from "react";

import Intro from "./home/Intro";
import About from "./home/About";
import Mobility from "./home/Mobility";
import AboutSite from "./home/AboutSite";

import * as HomeData from "../prop_types/homepage.json";

class Home extends React.Component {
	render() {
		return (
			<div>
				<Intro data={HomeData.citation} />
				<About data={HomeData.about_me} />
				<Mobility data={HomeData.job_research} />
				<AboutSite data={HomeData.about_site} />
			</div>
		);
	}
}

export default Home;
