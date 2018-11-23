import React from "react"
import hyperlinks from "root/prop_types/hyperlinks.json"
import "./FooterTouch.scss"

class FooterTouch extends React.Component {
	render() {
		return (
			<div className="mii-footer-touch mii-section container">
				<div className="mii-social has-text-centered">
					{hyperlinks.social.map((link, index) => {
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
					<a href={hyperlinks.contact.href} className="mii-link">
						<i className={hyperlinks.contact.icon} />
					</a>
				</div>
				<div className="mii-sign content has-text-centered">
					<p>
						<img
							alt="Creative Commons License"
							src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
						/>
						<br />
						...powered by{" "}
						<a
							href="https://reactjs.org/"
							className="mii-link content"
							style={{ textDecoration: "underline" }}
						>
							React.js
						</a>
						.
						<br />
						Ce site est sous licence{" "}
						<a
							href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
							className="mii-link"
							style={{ textDecoration: "underline" }}
						>
							CC BY-NC-SA 4.0
						</a>
						.
						<br />
						Cyril Parodi, 2018.
					</p>
				</div>
			</div>
		)
	}
}

export default FooterTouch
