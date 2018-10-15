import React from "react"
import "../../styles/About.css"

class About extends React.Component {
	render() {
		return (
			<section className="about-me is-widescreen" id="about-me">
				<div className="container">
					<div className="title is-medium">
						<h2>À propos de moi</h2>
					</div>
					<div className="content has-text-justified">
						<p>
							Originaire d'Aix-en-Provence et ayant vécu toute ma
							jeunesse près de Marseille, j'ai mis beaucoup de
							temps à savoir ce que je désirais faire le plus.
							Comme la plupart des gosses à qui leur père leur ont
							totalement interdit de refaire le même métier
							qu'eux, j'ai donc décidé d'entreprendre des études
							afin de me rapprocher de ce qui me passionnait le
							plus : l'informatique.
						</p>
						<p>
							Je me suis donc lancé dans un parcours totalement
							exotique composé de hauts et de bas. Après avoir
							décroché un BAC STi en Génie Électronique et
							Informatique Industrielle, et m'être vu fermer
							énormément de portes, j'ai poursuivi avec un BTS
							dans une spécialité réputée pour sa polyvalence
							avant de rencontrer des gens qui ont cru en moi et
							m'ont laissé l'opportunité d'entrer en école
							d'Ingénieur afin de pouvoir continuer d'apprendre
							l'Électronique.
						</p>
						<p>
							Arrivé à l'age de 23 ans, avec un diplôme
							d'ingénieur et des cernes bien visibles, je me rends
							compte que malgré le plaisir que je prenais à
							apprendre l'électronique, je ne me voyais pas en
							faire un métier. En revanche, je m'extasiais à
							"cracher du code" durant les modules de
							programmation. Après une première expérience peu
							concluante, je me décide donc de dégainer mes
							propres armes pour me reconvertir, dans l'optique de
							faire de cet extase une partie de mon métier.{" "}
						</p>
						<p>
							Je m'appelle Cyril, j'ai désormais 24 ans, et suis à
							la recherche d'une opportunité en développement.
						</p>
					</div>
					<div className="subtitle">
						<h3>Quels sont mes goûts ?</h3>
					</div>
					<div className="content">
						<div className="columns">
							<div className="column is-half">
								<div className="sub columns">
									<div className="column is-one-fifth has-text-success has-text-centered">
										<i class="fas fa-plus-circle fa-3x" />
									</div>
									<div className="column">
										<ul className="likes">
											<li>Le rétrocomputing</li>
											<li>Le rétrogaming</li>
											<li>Linux</li>
											<li>La récup'</li>
											<li>
												Le système <b>D</b>
											</li>
											<li>Les séries TV</li>
											<li>
												La lecture (un certain attrait
												pour la sociologie...)
											</li>
											<li>L'esprit critique</li>
											<li>L'honnêteté intellectuelle</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="column is-half">
								<div className="sub columns">
									<div className="column is-one-fifth has-text-danger has-text-centered">
										<i class="fas fa-minus-circle fa-3x" />
									</div>
									<div className="column">
										<ul className="likes">
											<li>L'injustice</li>
											<li>Les moralisateurs</li>
											<li>Les éditorialistes</li>
											<li>Jean-Pierre Pernaud</li>
											<li>Les clichés</li>
											<li>Les produits Apple</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="subtitle">
						<h3>Ce que je recherche ...</h3>
					</div>
					<div className="content has-text-justified">
						<p>
							Je recherche aujourd'hui à me lancer dans des
							petites structures (de type Startup ou PMEs), en
							raison de leur taille, entre-autres, mais aussi par
							rapport à l'ambiance générale qui s'y dégage et la
							polyvalence qui est offerte à chacun des employés de
							cette structure. Il s'agit donc ici de privilégier,
							l'autonomie, l'apprentissage voir l'auto-formation,
							et la comunication dans l'optique de contribuer au
							mieux à un projet et de la manière la plus
							formatrice possible.
						</p>
						<br />
						<p>
							Me lancer aujourd'hui dans des SSIIs est chose
							impossible en raison de la philosophie générale qui
							y règne, je recherche donc à m'insérer chez un
							client final. Merci donc aux SSIIs (petites ou
							grandes soient-elles) de ne pas me contacter.
						</p>
					</div>
					<div className="subtitle">
						<h3>Ce que j'ai à vendre ...</h3>
					</div>
					<div className="content">
						<ul>
							<li>
								<b>... de la passion.</b>
							</li>
							<li>
								<b>... une curiosité sans limites.</b>
							</li>
							<li>
								<b>... l'envie de contribuer à un projet.</b>
							</li>
							<li>
								<b>... un sens de la rigueur.</b>
							</li>
							<li>
								<b>... une envie d'apprendre.</b>
							</li>
							<li>
								<b>... un esprit critique.</b>
							</li>
							<li>
								<b>... de la polyvalence.</b>
							</li>
						</ul>
					</div>
				</div>
			</section>
		)
	}
}

export default About
