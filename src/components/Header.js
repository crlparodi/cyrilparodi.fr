import React from "react"
import { Link } from "react-router-dom"
import HeaderToggleButton from "./Header/HeaderToggleButton"
import HeaderNav from "./Header/HeaderNav"
import HeaderSideBar from "./Header/HeaderSideBar"
import Backdrop from "./Header/Backdrop"
import "./Header.scss"

class Header extends React.Component {
	constructor() {
		super()
		this.state = {
			headerDrawerOpen: false,
		}
	}
	headerDrawerStateSwitcher = () => {
		this.setState(prevState => {
			return { headerDrawerOpen: !prevState.headerDrawerOpen }
		})
	}
	headerBackdropRetrieve = () => {
		this.setState({ headerDrawerOpen: false })
	}
	render() {
		return (
			<section className="mii-header">
				<div className="mii-header-case container">
					<HeaderToggleButton
						drawerClickHandler={this.headerDrawerStateSwitcher}
					/>
					<div className="mii-home mii-case-cut has-text-left">
						<p>
							<span className="home">
								cyril
								<span
									style={{
										color: "#db504a",
									}}
								>
									.
								</span>
								parodi
							</span>
						</p>
					</div>
					<div className="mii-header-spacer" />
					<HeaderNav />
				</div>
				<HeaderSideBar
					show={this.state.headerDrawerOpen}
					clickHandler={this.headerDrawerStateSwitcher}
				/>
				<Backdrop
					show={this.state.headerDrawerOpen}
					clickHandler={this.headerBackdropRetrieve}
				/>
			</section>
		)
	}
}

export default Header
