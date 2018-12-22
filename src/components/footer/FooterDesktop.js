import React from "react"

/* LINKS */
import hyperlinks from "data/hyperlinks.json"

class FooterDesktop extends React.Component {
	render() {
		return (
			<div className="FooterDesktop grid-container">
				<div className="Contact grid-x grid-padding-y">
					<div className="Contact-halfPart cell auto text-center">
						<h3 className="ob-title">suivez-moi.</h3>
						<div>
							{hyperlinks.social.map((link, index) => {
								return (
									<a
										href={link.href}
										key={index}
										className="ob-link"
									>
										<i className={link.icon} key={index} />
									</a>
								)
							})}
						</div>
					</div>
					<div className="Contact-halfPart cell auto text-center">
						<h3 className="ob-title">contactez-moi.</h3>
						<a href={hyperlinks.contact.href} className="ob-link">
							<i className={hyperlinks.contact.icon} />
						</a>
					</div>
				</div>
				<span className="FooterDesktop-separator" />
				<div className="Misc cell auto text-center">
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
						. Ce site est sous licence{" "}
						<a
							href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
							className="ob-link"
							style={{ textDecoration: "underline" }}
						>
							CC BY-NC-SA 4.0
						</a>
						. Cyril Parodi, 2018.
					</p>
				</div>
			</div>
		)
	}
}

export default FooterDesktop
