import React from "react"

/* COMPONENTS */
import Button from "root/components/Button"

class EducationEntry extends React.Component {
	constructor(props) {
		super()
		this.state = {
			data: props.data,
			blaze: props.blaze,
			infoStatus: "infoClosed",
		}
	}
	render() {
		return (
			<div className="Entry isContainer">
				<div className="Entry-date">
					<div className="Entry-date onCover text-center">
						<p>{this.state.data.year}</p>
					</div>
				</div>
				<div className="Entry-ob">
					<div
						className="Entry-ob-tab grid-x grid-padding-x"
						onClick={() => {
							if (this.state.infoStatus === "infoClosed") {
								this.setState({
									infoStatus: "infoOpen",
								})
							} else {
								this.setState({
									infoStatus: "infoClosed",
								})
							}
						}}
					>
						<div className="Entry-ob-tab-pic cell shrink">
							{this.state.blaze}
						</div>
						<div className="Entry-ob-tab-topic cell auto">
							<h3 className="ob-subtitle">
								{this.state.data.grade}
							</h3>
							<p>{this.state.data.school}</p>
						</div>
						<div className={"Chevron cell shrink" + " " + this.state.infoStatus}>
							<i className="fas fa-angle-double-down fa-2x" />
						</div>
					</div>
					<div
						className={
							"Entry-ob-info" + " " + this.state.infoStatus
						}
					>
						<div className={"Box" + " " + this.state.infoStatus}>
							<div className="Box-info">
								{this.state.data.description.map(
									(description, index) => {
										return <p key={index}>{description}</p>
									},
								)}
								{this.state.data.keywords.map(
									(keyword, index) => {
										return (
											<span
												className="keyword"
												key={index}
											>
												{keyword}{", "}
											</span>
										)
									},
								)}
								<div className="links">
									{this.state.data.links.map(
										(link, index) => {
											return (
												<Button
													inner={link.name}
													url={link.url}
													key={index}
												/>
											)
										},
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default EducationEntry
