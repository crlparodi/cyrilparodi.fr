import React from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"

/* GOOGLE MAPS API IMPLEMENTATION 
 * This Container is deprecated
 */

export class MapContainer extends React.Component {
	render() {
		const mapStyle = {
			width: "300px",
			height: "300px",
		}
		return (
			<div style={mapStyle}>
				<Map google={this.props.google} zoom={14} />
			</div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
})(MapContainer)
