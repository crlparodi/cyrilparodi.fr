import React from "react";

/* PROP-TYPES */
import * as PropSets from "root/prop-types/Resume";

/* MEDIAS */
import IMG from "img/board.jpg";
import SocialMedia from "root/components/SocialMedia";

/* FONT-AWESOME */
import { FontAwesomeIcon } from "modules/@fortawesome/react-fontawesome";
import { faFilePdf } from "modules/@fortawesome/free-solid-svg-icons";

class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 0,
			offset: 0,
		};
		this.data = props.data;
		this._isMounted = false;
	}

	updateDimensions() {
		if (window.innerHeight >= 680 && window.innerHeight <= 1080) {
			if (this._isMounted) this.setState({ height: window.innerHeight });
		} else {
			if (window.innerHeight < 680) {
				if (this._isMounted) this.setState({ height: 680 });
			} else {
				if (this._isMounted) this.setState({ height: 1080 });
			}
		}
	}

	componentDidMount() {
		this._isMounted = true;
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions.bind(this));
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	banner() {
		return (
			<section
				className="Banner isWrapper"
				style={{
					height: this.state.height + "px",
					backgroundImage: "url(" + IMG + ")",
				}}>
				<div className="Banner-backgroundCover">
					<div className="Banner-container isContainer">
						<div className="Content">
							<h1 className="ob-title">{"CYRIL PARODI"}</h1>
							<h2 className="ob-subtitle">{"Ingénieur"}</h2>
							<div className="Contacts">
								<SocialMedia
									email={this.data.email}
									profiles={this.data.profiles}
								/>
							</div>
							<a
								className="ob-button"
								target="_blank"
								href="https://www.cyril-parodi.fr/doc/CV_6.5_0420_WEB.pdf">
								<FontAwesomeIcon icon={faFilePdf} />
								{"Télécharger le CV"}
							</a>
						</div>
						<div className="Credits">
							{"Crédits photo"}
							<br />
							<a
								href="https://unsplash.com/@christianw?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
								target="_blank"
								rel="noopener noreferrer"
								title="Crédits photo: Christian WIEDIGER"
								className="UnsplashCredit">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
										<path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
									</svg>
								</span>
								<span className="Author">Christian WIEDIGER</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}

	render() {
		return this.banner();
	}
}

Banner.propTypes = {
	data: PropSets.basics,
};

export default Banner;
