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

export default {
	Education,
}
