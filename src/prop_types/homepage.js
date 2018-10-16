import PropTypes from "prop-types"

/* HALF-COMPONENTS */
const bulletPoints = PropTypes.arrayOf(PropTypes.string)

/* PROP-SETS */
const citation = PropTypes.shape({
	quote: PropTypes.string,
	author: PropTypes.string,
	book: PropTypes.string,
	year: PropTypes.number
})

const cv_link = PropTypes.shape({
	type: PropTypes.string,
	link: PropTypes.string
})
const cv_linkSet = PropTypes.arrayOf(cv_link).isRequired

const about_me = PropTypes.shape({
	tope: PropTypes.string,
	likes: bulletPoints,
	dislikes: bulletPoints,
	job_research: PropTypes.string,
	qualities: bulletPoints
})

const about_site = PropTypes.shape({
	topo: PropTypes.string
})

export default {
	bulletPoints,
	citation,
	cv_link,
	cv_linkSet,
	about_me,
	about_site
}
