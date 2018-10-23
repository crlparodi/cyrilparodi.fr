import React from "react";
import Button from "./Button";
import "../styles/Footer.scss";

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
];

class Footer extends React.Component {
	contact() {
		return (
			<section className="contact is-widescreen">
				<div className="container">
					<div className="roof">
						<div className="title is-medium">
							<h2>Me contacter</h2>
						</div>
						<div className="columns has-text-centered">
							<div className="outro column is-half has-text-justified">
								<p>
									Une dernière chose, sachez que je suis
									disponible dans toutes les Bouches-du-Rhône.
									Si mon profil vous interesse, ou bien si
									vous désirez en savoir d'avantage sur mon
									parcours, n'hésitez pas à me contacter sur
									LinkedIn ou bien par mail.
									<br />
									Au plaisir de vous répondre prochainement !
								</p>
								<br />
							</div>
							<div className="links column is-fullwidth">
								{buttons.map((button, index) => {
									return (
										<Button
											dark={button.dark}
											data={button.data}
											href={button.href}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	misc() {
		return (
			<section className="misc is-widescreen">
				<div className="container">
					<div className="level">
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
			</section>
		);
	}

	footer() {
		return (
			<footer>
				<this.contact />
				<this.misc />
			</footer>
		);
	}

	render() {
		return this.footer();
	}
}

export default Footer;
