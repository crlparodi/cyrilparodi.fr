import React, { Fragment } from "react";

/* DATA */
import * as ProjectsData from "data/projects.json";
import * as ResumeData from "data/resume.json";

/* GENERIC COMPONENTS */
import Header from "root/components/Header";
import Footer from "root/components/Footer";
import Banner from "root/components/Banner";
import Toolbox from "root/components/Toolbox";

/* NAVIGATION COMPONENTS */
import About from "./About";
import Experiences from "./Experiences";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Hobbies from "./Hobbies";
import Projects from "./Projects";
import PDF from "./PDF";

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.switchTheme = props.switchTheme;
		this.aboutReference = React.createRef();
		this.expReference = React.createRef();
		this.educReference = React.createRef();
		this.skillsReference = React.createRef();
		this.awardReference = React.createRef();
		this.hobbiesReference = React.createRef();
		this.projReference = React.createRef();
		this.pdfReference = React.createRef();
		this.navigationHandler = this.navigationHandler.bind(this);
		this.scrollToComponent = this.scrollToComponent.bind(this);
	}

	navigationHandler(reference) {
		switch (reference) {
			case "about":
				this.scrollToComponent(this.aboutReference);
				break;
			case "exps":
				this.scrollToComponent(this.expReference);
				break;
			case "educ":
				this.scrollToComponent(this.educReference);
				break;
			case "skills":
				this.scrollToComponent(this.skillsReference);
				break;
			case "award":
				this.scrollToComponent(this.awardReference);
				break;
			case "hobbies":
				this.scrollToComponent(this.hobbiesReference);
				break;
			case "proj":
				this.scrollToComponent(this.projReference);
				break;
			case "pdf":
				this.scrollToComponent(this.pdfReference);
				break;
		}
	}

	scrollToComponent(reference) {
		window.scrollTo(0, reference.current.offsetTop - 95);
	}

	render() {
		return (
			<>
				<Toolbox themeHandler={this.switchTheme.bind(this)} />
				<Header navHandler={this.navigationHandler.bind(this)} />
				<Banner data={ResumeData.basics} />
				<About data={ResumeData.basics} reference={this.aboutReference} />
				<Experiences data={ResumeData.works} reference={this.expReference} />
				<Education data={ResumeData.education} reference={this.educReference} />
				<Skills data={ResumeData.skills} reference={this.skillsReference} />
				<Certifications data={ResumeData.awards} reference={this.awardReference} />
				<Hobbies data={ResumeData.interests} reference={this.hobbiesReference} />
				<Projects
					data={ResumeData.basics}
					projects={ProjectsData.projects}
					reference={this.projReference}
				/>
				<PDF data={ResumeData.basics} reference={this.pdfReference} />
				<Footer data={ResumeData.basics} />
			</>
		);
	}
}

export default Root;
