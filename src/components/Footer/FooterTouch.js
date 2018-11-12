import React from "react"
import hyperlinks from "root/prop_types/hyperlinks.json"
import "./FooterTouch.scss"

class FooterTouch extends React.Component {
	render() {
		return (
			<div className="mii-footer-touch container">
				<div className="mii-social has-text-centered">
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
				<div className="mii-misc content has-text-centered">
					<p>
						<span className="home"> CYRIL PARODI </span>
					</p>
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

export default FooterTouch
