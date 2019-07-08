import React from "react"

/* COMPONENTS */
import TimelineDesktop from "./timeline/TimelineDesktop"
import TimelineTouch from "./timeline/TimelineTouch"

class Timeline extends React.Component {
	constructor(props) {
		super()
		this.state = {
			timelineView: null,
			data: props.data,
		}
	}
	componentDidMount() {
		this.timelineViewSwitcher()
		window.addEventListener("resize", this.timelineViewSwitcher.bind(this))
	}
	timelineViewSwitcher() {
		if (window.innerWidth <= 1023) {
			this.setState({
				timelineView: <TimelineTouch data={this.state.data} />,
			})
		}
		if (window.innerWidth > 1023) {
			this.setState({
				timelineView: <TimelineDesktop data={this.state.data} />,
			})
		}
	}
	render() {
		return <div className="Timeline">{this.state.timelineView}</div>
	}
}

export default Timeline
