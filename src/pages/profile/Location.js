import React from "react"

class Location extends React.Component {
	render() {
		return (
			<section className="Location isWrapper">
				<div className="Location-container isContainer">
					<h2 className="ob-title isPrimary">{"je suis là."}</h2>
					<div className="Map">
						<div className="Map-frame">
							<div className="Map-frame onCover">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262342.0976167936!2d5.004701119168034!3d43.408951485126536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9e899dfa199a3%3A0xe6d9c9caf3ba12b1!2s13730+Saint-Victoret!5e0!3m2!1sfr!2sfr!4v1541180813645"
									width="100%"
									height="480"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Location
