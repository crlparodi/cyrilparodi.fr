import React from "react"
import Loader from "react-loader-advanced"

/* COMPONENTS */
import Spinner from "root/components/Spinner"

class ProjectEntry extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
			background: props.background,
			showLoader: true
		}
		this._isMounted = false
	}
	componentDidMount() {
		this._isMounted = true
		const hdImg = new Image()
		hdImg.src = this.state.background

		hdImg.onload = () => {
			if (this._isMounted) {
				this.setState({
					showLoader: false
				})
			}
		}
	}
	componentWillUnmount() {
		this._isMounted = false
	}
	render() {
		return (
			<Loader
				show={this.state.showLoader}
				message={<Spinner />}
				backgroundStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
				hideContentOnLoad={true}
			>
				<li>
					<div
						className="Project"
						style={{
							backgroundImage:
								"url(" + this.state.background + ")"
						}}
					>
						<a
							className="Link"
							target="_blank"
							rel="noopener noreferrer"
							href={this.state.data.url}
						>
							<div className="Diamond">
								<div className="Content">
									<h2 className="Title ob-subtitle">
										{this.state.data.name}
									</h2>
									<span>{this.state.data.description}</span>
									<br />
									<span>
										{"Langage: " + this.state.data.language}
									</span>
								</div>
								<div className="Diamond-sibling"></div>
							</div>
						</a>
					</div>
				</li>
			</Loader>
		)
	}
}

ProjectEntry.defaultProps = {
	name: "<PROJECT>",
	description: "<DESCRIPTION>",
	language: "<VOID>"
}

export default ProjectEntry
