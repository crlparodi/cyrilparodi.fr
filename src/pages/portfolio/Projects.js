import React from "react"

/* MEDIAS */
import JSSVG from "img/FileSaveBlazes/JS.js"
import PYSVG from "img/FileSaveBlazes/PY.js"
import CPPSVG from "img/FileSaveBlazes/CPP.js"

class Projects extends React.Component {
	render() {
		return (
			<section className="Projects isWrapper">
				<ul className="Projects-list isContainer">
					<a className="Projects-list-type-javascript"
							target="_blank"
							rel="noopener noreferrer"
							href="http://github.com/crlparodi/project-mii">
						<li
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
						</li>
					</a>
					<a className="Projects-list-type-python"
							target="_blank"
							rel="noopener noreferrer"
							href="http://github.com/crlparodi/project-cabbage">
						<li
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
						</li>
					</a>
					<a className="Projects-list-type-cpp"
							target="_blank"
							rel="noopener noreferrer"
							href="http://github.com/crlparodi/cppdiscover-stickynotes">
						<li
						>
							<CPPSVG />
							<span className="Title ob-subtitle">
								{"stickynotes.cpp"}
							</span>
							<span>
								{
									"Une petit pense-bête sur terminal ?"
								}
							</span>
						</li>
					</a>
				</ul>
			</section>
		)
	}
}

export default Projects
