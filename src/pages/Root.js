import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

/* COMPONENTS */
import Header from "root/components/Header"
import Footer from "root/components/Footer"

/* CONTAINERS */
import ScrollToTop from "root/containers/ScrollToTop"

/* PAGES - SECTIONS */
import Profile from "root/pages/Profile"
import CurriculumVitae from "root/pages/CurriculumVitae"
import Error404 from "root/pages/Error404"

class Root extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<Route
						render={({ location }) => (
							<TransitionGroup className="RouterTransitionWrapper">
								<CSSTransition
									key={location.pathname}
									classNames="fade"
									timeout={400}
									exit={false}
								>
									<ScrollToTop>
										<Switch location={location}>
											<Route
												exact
												path="/"
												component={Profile}
											/>
											<Route
												path="/cv"
												component={CurriculumVitae}
											/>
											<Route path="/projets" />
											<Route
												component={() => <Error404 />}
											/>
										</Switch>
									</ScrollToTop>
								</CSSTransition>
							</TransitionGroup>
						)}
					/>
					<Footer />
				</div>
			</Router>
		)
	}
}

export default Root
