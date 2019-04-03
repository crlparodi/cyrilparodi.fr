import PropTypes from "prop-types"

/* EDUCATION */
const Education = PropTypes.arrayOf(
	PropTypes.shape({
		grade: PropTypes.string,
		year: PropTypes.number,
		school: PropTypes.string,
		description: PropTypes.string,
		keywords: PropTypes.arrayOf(PropTypes.string),
	}),
)

/* EXPERIENCES */
const Experiences = PropTypes.arrayOf(
	PropTypes.shape({
		jobname: PropTypes.string,
		year: PropTypes.shape({
			start: PropTypes.string,
			end: PropTypes.string,
		}),
		company: PropTypes.string,
		description: PropTypes.string,
	}),
)

export default {
	Education,
	Experiences,
}
