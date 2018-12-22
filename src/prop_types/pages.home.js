import PropTypes from "prop-types"

/* INTRO */
const Intro = PropTypes.shape({
	quote: PropTypes.string,
	author: PropTypes.string,
	book: PropTypes.string,
	year: PropTypes.number,
})

/* ABOUT */
const About = PropTypes.arrayOf(PropTypes.string)

const CVSection = PropTypes.arrayOf(
	PropTypes.shape({
		inner: PropTypes.string,
		ico: PropTypes.string,
		url: PropTypes.string,
	}),
)

const Likes = PropTypes.arrayOf(
	PropTypes.shape({
		name: PropTypes.string,
		jpg: PropTypes.string,
	}),
)

const SoftSkills = PropTypes.arrayOf(PropTypes.string)

/* MOBILITY */
const Mobility = PropTypes.arrayOf(PropTypes.string)

/* ABOUT SITE* */
const AboutSite = PropTypes.arrayOf(PropTypes.string)

export default {
	Intro,
	About,
	CVSection,
	Likes,
	SoftSkills,
	Mobility,
	AboutSite,
}
