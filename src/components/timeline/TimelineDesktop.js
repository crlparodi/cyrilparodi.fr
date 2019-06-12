import React from "react"

/* COMPONENTS */
import Date from "./Date"

/* MEDIAS */
import ASMSVG from "img/FileSaveBlazes/ASM"
import CSVG from "img/FileSaveBlazes/C"
import JAVASVG from "img/FileSaveBlazes/JAVA"
import JSSVG from "img/FileSaveBlazes/JS"
import PYSVG from "img/FileSaveBlazes/PY"
import SHSVG from "img/FileSaveBlazes/SH"
import VHDSVG from "img/FileSaveBlazes/VHD"

const blazes = [
	[<CSVG />],
	[<VHDSVG />, <ASMSVG />],
	[<JAVASVG />],
	[<JSSVG />, <PYSVG />],
	[<SHSVG />],
]

class TimelineDesktop extends React.Component {
	constructor(props) {
		super()
		this.data = props.data
	}
	render() {
		return (
			<ul className="TimelineDesktop">
				{this.data.map((entry, entryIndex) => {
					return (
						<li key={entryIndex}>
							<div>
								<Date date={entry.year} />
								<ul>
									{entry.fields.map((field, fieldIndex) => {
										return (
											<li
												className="Entry"
												key={fieldIndex}
											>
												{blazes[entryIndex][fieldIndex]}
												<span>{field.name}</span>
											</li>
										)
									})}
								</ul>
							</div>
						</li>
					)
				})}
			</ul>
		)
	}
}

TimelineDesktop.defaultProps = {
	year: "1900",
	fields: [
		{
			name: "<LANG>",
		},
	],
}

export default TimelineDesktop
