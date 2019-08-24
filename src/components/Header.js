import React from "react"

/* COMPONENTS */
import HeaderToggleButton from "./header/HeaderToggleButton"
import HeaderNav from "./header/HeaderNav"
import HeaderSideBar from "./header/HeaderSideBar"
import Backdrop from "./header/Backdrop"

class Header extends React.Component {
	constructor() {
		super()
		this.state = {
			headerDrawerOpen: false,
			headerType: "isOnTop"
		}
	}
	componentDidMount() {
		window.addEventListener("scroll", this.headerTypeSwitcher)
	}
	componentWillUnmount() {
		window.addEventListener("scroll", this.headerTypeSwitcher)
	}
	headerTypeSwitcher = () => {
		if (window.scrollY > 0) {
			this.setState({
				headerType: "isOnCover"
			})
		} else {
			this.setState({
				headerType: "isOnTop"
			})
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
			<section className={"Header" + " " + this.state.headerType}>
				<div className="Content isContainer grid-x">
					<HeaderToggleButton
						drawerClickHandler={this.headerDrawerStateSwitcher}
					/>
					<div className={"Content-logo cell auto"}>
						{"cyril parodi"}
					</div>
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
