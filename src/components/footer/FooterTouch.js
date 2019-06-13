import React from "react"

/* LINKS */
import hyperlinks from "data/hyperlinks.json"

class FooterTouch extends React.Component {
	render() {
		return (
			<div className="FooterTouch">
				<div className="FooterTouch-contact">
					{hyperlinks.contact.map((link, index) => {
						return (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={link.href}
								key={index}
								className="ob-link"
							>
								<i className={link.icon} key={index} />
							</a>
						)
					})}
				</div>
				<div className="FooterTouch-misc">
					<p>
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
							href="https://www.gnu.org/licenses/gpl-3.0"
							className="ob-link"
							style={{ textDecoration: "underline" }}
						>
							GNU General Public License v3
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
