import React from "react"
import Responsive from "react-responsive"

export const FullHD = props => <Responsive {...props} minWidth={1408} />
export const Widescreen = props => (
	<Responsive {...props} minWidth={1216} maxWidth={1407} />
)
export const Desktop = props => (
	<Responsive {...props} minWidth={1024} maxWidth={1215} />
)
export const Tablet = props => (
	<Responsive {...props} minWidth={769} maxWidth={1023} />
)
export const MobilePortrait = props => (
	<Responsive {...props} maxWidth={768} orientation={"portrait"} />
)
export const MobileLandscape = props => (
	<Responsive {...props} maxWidth={768} orientation={"landscape"} />
)
