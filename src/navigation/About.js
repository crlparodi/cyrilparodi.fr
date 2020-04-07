import React from "react";
import PropTypes from "prop-types";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

/* MEDIAS */
import SelfPic from "img/mii.min.png";

class About extends React.Component {
	constructor(props) {
		super(props);
		this.ref = props.reference;
		this.data = props.data;
		this.scrollToComponent = this.scrollToComponent.bind(this);
	}

	scrollToComponent() {
		window.scrollTo(0, this.ref.current.offsetTop - 95);
	}

	render() {
		return (
			<section className="About isWrapper" ref={this.ref}>
				<div className="About isContainer">
					<h2 className="ob-title isMono">{"à propos"}</h2>
					<div className="About-content">
						<img className="Photo" src={SelfPic} title="C'est moi !" />
						<div className="Self">
							{this.data.summary.map((paragraph, index) => {
								return (
									<p className="Self-p" key={index}>
										{paragraph}
									</p>
								);
							})}
							<ul className="Self-list">
								<li className="Self-list-element">
									<span className="Entry">{"Âge:" + " "}</span>
									{this.data.age + " " + "ans"}
								</li>
								<li className="Self-list-element">
									<span className="Entry">{"Métier:" + " "}</span>
									{this.data.label}
								</li>
								<li className="Self-list-element">
									<span className="Entry">{"Poste recherché:" + " "}</span>
									{this.data.target}
								</li>
								<li className="Self-list-element">
									<span className="Entry">{"Résidence:" + " "}</span>
									{this.data.location.city +
										", " +
										this.data.location.region +
										", " +
										this.data.location.country}
								</li>
								<li className="Self-list-element">
									<span className="Entry">{"Adresse mail:" + " "}</span>
									<a className="ob-link">{this.data.email}</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

About.propTypes = {
	reference: PropTypes.any,
	data: PropSets.basics,
};

export default About;
