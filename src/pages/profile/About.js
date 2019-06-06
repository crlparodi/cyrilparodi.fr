import React from "react"
import Loader from "react-loader-advanced"

/* COMPONENTS */
import Spinner from "root/components/Spinner"

/* MEDIAS */
import SelfPic from "img/mii.min.png"

class About extends React.Component {
	constructor(props) {
		super()
		this.state = {
			showLoader: true,
		}
		this._isMounted = false
	}
	componentDidMount() {
		this._isMounted = true
		const hdImg = new Image()
		hdImg.src = SelfPic

		hdImg.onload = () => {
			if (this._isMounted) {
				this.setState({
					showLoader: false,
				})
			}
		}
	}
	componentWillUnmount() {
		this._isMounted = false
	}
	render() {
		return (
			<section className="About isWrapper">
				<div className="About isContainer">
					<h2 className="About-title ob-title isPrimary">
						{"bonjour !"}
					</h2>
					<div className="About-content">
						<div className="Picture">
							<Loader
								show={this.state.showLoader}
								message={<Spinner />}
								backgroundStyle={{
									backgroundColor: "rgba(0,0,0,0)",
								}}
								hideContentOnLoad={true}
							>
								<img src={SelfPic} title="self-picture." />
							</Loader>
						</div>
						<div className="Topic">
							<ul className="Topic-bulletPoints">
								<li>
									{
										<b>
											Je m'appelle Cyril, j'ai 24 ans et
											suis originaire d'Aix-en-Provence.
										</b>
									}
								</li>
								<li>
									{
										"J'ai la nationalité française et suis titulaire d'un permis B avec véhicule."
									}
								</li>
								<li>
									{
										"Je suis diplômé d'ingénieur à POLYTECH Marseille depuis Décembre 2017."
									}
								</li>
								<li>
									{
										"Je suis né avec ue souris dans les mains, j'avais déjà mon propre PC à l'age de 5 ans... un vieux PC IBM que mon père avait récupéré à son travail. À l'époque, le stockage n'était pas énorme... (2 HDD de 2Go) et nos fameuses clés USB étaient des disquettes 3,5\"."
									}
								</li>
								<li>
									{
										"Mon père et moi aimions partager et découvrir l'informatique par le passé, mais aujourd'hui, c'est moi qui assure le SAV familial..."
									}
								</li>
								<li>
									{
										"J'ai un certain amour pour les FOSS (Free and Open-Source Software) et traine sous Linux depuis que Microsoft ait décidé de me forcer ses MàJs sous Windows 8.1/10..."
									}
								</li>
								<li>
									{
										"Tous mes PCs actuels et anciens ont un prénom... (Don't judge me !)"
									}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default About
