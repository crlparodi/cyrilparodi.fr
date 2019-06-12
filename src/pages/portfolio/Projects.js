import React from "react"

/* MEDIAS */
import JSSVG from "img/FileSaveBlazes/JS.js"
import PYSVG from "img/FileSaveBlazes/PY.js"

class Projects extends React.Component {
	render() {
		return (
			<section className="Projects">
				<ul className="Projects-list">
					<li className="Projects-list-type-javascript">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="http://github.com/crlparodi/project-mii"
						>
							<JSSVG />
							<span className="Title ob-subtitle">
								{"project-mii.js"}
							</span>
							<span>
								{
									"Code source de ce site :  http://cyrilparodi.fr"
								}
							</span>
						</a>
					</li>
					<li className="Projects-list-type-python">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="http://github.com/crlparodi/project-cabbage"
						>
							<PYSVG />
							<span className="Title ob-subtitle">
								{"project-cabbage.py"}
							</span>
							<span>
								{
									"Maquette d'une Plateforme Communautaire de Babysitting"
								}
							</span>
						</a>
					</li>
				</ul>
			</section>
		)
	}
}

export default Projects
