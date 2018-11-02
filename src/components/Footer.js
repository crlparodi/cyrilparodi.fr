import React from "react"
import Button from "./Button"
import "../styles/Footer.scss"

const buttons = [
	{
		dark: true,
		data: {
			html: "LinkedIn",
			icon: "fab fa-linkedin-in",
		},
		href: "https://www.linkedin.com/in/cyril-parodi",
	},
	{
		dark: true,
		data: {
			html: "E-Mail",
			icon: "fas fa-envelope",
		},
		href: "mailto:parodicyril@gmail.com",
	},
]

class Footer extends React.Component {
	render() {
		return (
			<div className="mii-contact mii-section">
				<div className="mii-svg-block">
					<svg
						className="mii-svg"
						id="bigTriangleColor"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="100%"
						height="110"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<path
							className="overflow"
							d="M 0 0 l 0 20 l 50 60 l 50 -60 l 0 -20"
						/>
						<path d="M 0 -1 l 0 1 l 50 80 l 50 -80.00 l 0 -1" />
					</svg>
				</div>
				<div className="mii-top has-text-centered container">
					<div className="bul-tools columns">
						<div className="outro column is-half has-text-justified">
							<p>
								Mon profil vous intéresse, vous voulez en savoir
								d'avantage sur moi ? Contactez-moi !
							</p>
						</div>
						<div className="links column is-fullwidth">
							{buttons.map((button, index) => {
								return (
									<Button
										dark={button.dark}
										data={button.data}
										href={button.href}
									/>
								)
							})}
						</div>
					</div>
				</div>
				<div className="mii-bottom level container">
					<div className="level-left">
						<div className="level-item">
							<p>
								<span className="home"> CYRIL PARODI </span>
							</p>
						</div>
					</div>
					<div className="level-right">
						<div className="level-item">
							<div className="license content has-text-right is-small">
								<p>
									<img
										alt="Creative Commons License"
										src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
									/>
									<br />
									Ce site est sous licence{" "}
									<a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
										CC BY-NC-SA 4.0
									</a>
									.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
