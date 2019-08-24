import React from "react"

/* COMPONENTS */
import Button from "root/components/Button"

class Site extends React.Component {
	render() {
		return (
			<section className="Site isWrapper">
				<div className="Site-container isContainer">
					<h2 className="Title ob-title isPrimary">
						{"pourquoi ce site ?"}
					</h2>
					<div className="Topic">
						<div className="Topic-remarks">
							<p>
								{
									"Je voulais proposer un espace à mon image, c'est un projet personnel qui me tenait à coeur et sur lequel j'y mets du temps et de la passion."
								}
								<br />
								<br />
								{
									"Le site a été dévéloppé en React.js, les fichiers source du site sont disponible sur GitHub. Vous pouvez aussi voir les quelques expérimentations de design pour ce site sur Codepen."
								}
							</p>
						</div>
						<div className="Topic-github">
							<Button
								inner={"github.io"}
								url={
									"https://github.com/crlparodi/cyrilparodi.fr"
								}
							/>
							<Button
								inner={"codepen.io"}
								href={"https://codepen.io/crlparodi/"}
							/>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Site
