import React from "react"

class Location extends React.Component {
	render() {
		return (
			<section className="Location isWrapper">
				<div className="Location-container isContainer">
					<h2 className="ob-title isPrimary">{"je suis là"}</h2>
					<div className="Map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220543.5037376642!2d5.094020463746413!3d43.42476854996232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9e899dfa199a3%3A0xe6d9c9caf3ba12b1!2s13730%20Saint-Victoret!5e0!3m2!1sfr!2sfr!4v1566660124744!5m2!1sfr!2sfr"
							width="100%"
							height="480"
							frameBorder="0"
						/>
					</div>
				</div>
			</section>
		)
	}
}

export default Location
