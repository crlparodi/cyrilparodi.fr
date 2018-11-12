import React from "react"
import hyperlinks from "root/prop_types/hyperlinks.json"
import "./FooterDesktop.scss"

class FooterDesktop extends React.Component {
	render() {
		return (
			<div className="mii-footer container">
				<div className="mii-home mii-case-cut has-text-left">
					<p>
						<span className="home"> CYRIL PARODI </span>
					</p>
				</div>
				<div className="mii-social mii-case-cut has-text-centered">
					<p className="mii-msg has-text-centered">Contactez-moi !</p>
					<div>
						{hyperlinks.footer.map((link, index) => {
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
				</div>
				<div className="mii-cc mii-case-cut content has-text-right is-small">
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
		)
	}
}

export default FooterDesktop
