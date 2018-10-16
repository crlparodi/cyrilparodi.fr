import PropTypes from "prop-types"

/* HALF-COMPONENTS */
const bulletPoints = PropTypes.arrayOf(PropTypes.string)

/* PROP-SETS */
const citation = PropTypes.shape({
	quote: PropTypes.string,
	author: PropTypes.string,
	book: PropTypes.string,
	year: PropTypes.number,
})

const cv_link = PropTypes.shape({
	html: PropTypes.string,
	icon: PropTypes.string,
	link: PropTypes.string,
})

const about_me = PropTypes.shape({
	text: PropTypes.string,
	likes: bulletPoints,
	dislikes: bulletPoints,
	job_research: PropTypes.string,
	qualities: bulletPoints,
})

const about_site = PropTypes.shape({
	text: PropTypes.string,
})

export default {
	bulletPoints,
	citation,
	cv_link,
	about_me,
	about_site,
}
