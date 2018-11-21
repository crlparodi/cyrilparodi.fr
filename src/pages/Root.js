import React from "react"
import { Switch, Route } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import ScrollToTop from "root/containers/ScrollToTop"

import Header from "root/components/Header"
import Home from "./Home"
import CurriculumVitae from "./CurriculumVitae"
import Footer from "root/components/Footer"

import "./Root.scss"

class Root extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Route
					render={({ location }) => (
						<TransitionGroup>
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
