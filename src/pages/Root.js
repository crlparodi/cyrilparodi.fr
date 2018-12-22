import React from "react"
import { Switch, Route } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

/* COMPONENTS */
import Header from "root/components/Header"
import Footer from "root/components/Footer"

/* CONTAINERS */
import ScrollToTop from "root/containers/ScrollToTop"

/* PAGES - SECTIONS */
import Home from "root/pages/Home"
import CurriculumVitae from "root/pages/CurriculumVitae"

class Root extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Route
					render={({ location }) => (
						<TransitionGroup className="mii-router-transition-wrapper">
							<CSSTransition
								key={location.pathname}
								classNames="fade"
								timeout={400}
								exit={false}
							>
								<Switch location={location}>
									<ScrollToTop>
										<Route
											exact
											path="/"
											component={Home}
										/>
										<Route
											exact
											path="/cv"
											component={CurriculumVitae}
										/>
									</ScrollToTop>
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					)}
				/>
				<Footer />
			</div>
		)
	}
}

export default Root
