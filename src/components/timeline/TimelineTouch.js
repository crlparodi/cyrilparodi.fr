import React from "react"

/* COMPONENTS */
import Date from "./Date"

class TimelineTouch extends React.Component {
	constructor(props) {
		super()
		this.data = props.data
	}
	render() {
		return (
			<ul className="TimelineTouch">
				{this.data.map((entry, entryIndex) => {
					return (
						<li key={entryIndex}>
							<div>
								<Date date={entry.year} />
								{entry.fields.map((field, fieldIndex) => {
									return (
										<p key={fieldIndex}>
											{"-" +
												" " +
												field.name +
												" " +
												field.desc}
										</p>
									)
								})}
							</div>
						</li>
					)
				})}
			</ul>
		)
	}
}

TimelineTouch.defaultProps = {
	year: "1900",
	fields: [
		{
			name: "<LANG>",
			desc: "<DESC>",
		},
	],
}

export default TimelineTouch
