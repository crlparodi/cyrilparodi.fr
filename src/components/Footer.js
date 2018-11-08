import React from "react"
import "../styles/components/Footer.scss"

const links = [
	{
		icon: "fab fa-linkedin-in",
		href: "https://www.linkedin.com/in/cyril-parodi",
	},
	{
		icon: "fab fa-twitter",
		href: "https://twitter.com/crlparodi",
	},
	{
		icon: "fas fa-envelope",
		href: "mailto:parodicyril@gmail.com",
	},
]

class Footer extends React.Component {
	render() {
		return (
			<section className="mii-footer mii-section mii-dark">
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
					<div className="mii-up">
						<a href="#">
							<i className="fas fa-angle-double-up fa-5x" />
						</a>
					</div>
				</div>
				<div className="mii-misc container">
					<p className="mii-title has-text-centered">
						Contactez-moi !
					</p>
					<div className="bul-tools level">
						<div className="mii-home level-item has-text-left">
							<p>
								<span className="home"> CYRIL PARODI </span>
							</p>
						</div>
						<div className="mii-social level-item has-text-centered">
							{links.map((link, index) => {
								return (
									<a
										href={link.href}
										key={index}
										className="mii-link"
									>
										<i className={link.icon} key={index} />
									</a>
								)
							})}
						</div>
						<div className="mii-cc level-item content has-text-right is-small">
							<p>
								<img
									alt="Creative Commons License"
									src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
								/>
								<br />
								Ce site est sous licence{" "}
								<a
									href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
									className="mii-link"
								>
									CC BY-NC-SA 4.0
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Footer
