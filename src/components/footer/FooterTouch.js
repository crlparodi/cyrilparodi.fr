import React from "react"

/* LINKS */
import hyperlinks from "data/hyperlinks.json"

class FooterTouch extends React.Component {
	render() {
		return (
			<div className="FooterTouch grid-container">
				<div className="FooterTouch-contact text-center">
					{hyperlinks.social.map((link, index) => {
						return (
							<a href={link.href} key={index} className="ob-link">
								<i className={link.icon} key={index} />
							</a>
						)
					})}
					<a href={hyperlinks.contact.href} className="ob-link">
						<i className={hyperlinks.contact.icon} />
					</a>
				</div>
				<div className="FooterTouch-misc text-center">
					<p>
						<img
							alt="Creative Commons License"
							src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
						/>
						<br />
						...powered by{" "}
						<a
							href="https://reactjs.org/"
							className="ob-link"
							style={{ textDecoration: "underline" }}
						>
							React.js
						</a>
						.
						<br />
						Ce site est sous licence{" "}
						<a
							href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
							className="ob-link"
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
