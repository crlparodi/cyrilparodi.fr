import React from "react";
import PropTypes from "prop-types";

/* IMG */
import Logo from "img/Logo";

/* COMPONENTS */
import HeaderToggleButton from "./header/HeaderToggleButton";
import HeaderNav from "./header/HeaderNav";
import HeaderSideBar from "./header/HeaderSideBar";
import Backdrop from "./header/Backdrop";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headerDrawerOpen: false,
			headerType: "isOnTop",
		};
		this.navHandler = props.navHandler;
		this.headerDrawerStateSwitcher = this.headerDrawerStateSwitcher.bind(this);
		this.headerBackdropRetrieve = this.headerBackdropRetrieve.bind(this);
	}

	componentDidMount() {
		window.addEventListener("scroll", this.headerTypeSwitcher.bind(this));
	}

	componentWillUnmount() {
		window.addEventListener("scroll", this.headerTypeSwitcher.bind(this));
	}

	headerTypeSwitcher() {
		if (window.scrollY > 95) {
			this.setState({
				headerType: "isOnCover",
			});
		} else {
			this.setState({
				headerType: "isOnTop",
			});
		}
	}

	headerDrawerStateSwitcher() {
		this.setState(prevState => {
			return { headerDrawerOpen: !prevState.headerDrawerOpen };
		});
	}

	headerBackdropRetrieve() {
		this.setState({ headerDrawerOpen: false });
	}

	render() {
		return (
			<section className={"Header" + " " + this.state.headerType}>
				<div className="Content isContainer grid-x">
					<HeaderToggleButton drawerClickHandler={this.headerDrawerStateSwitcher} />
					<div className={"Content-logo cell auto"}>
						<div className="Logo">
							<a
								className="ob-link"
								href="#void"
								onClick={() => {
									if(this.state.headerDrawerOpen){
										this.headerDrawerStateSwitcher()
									}
									window.scrollTo(0, 0);
								}}>
								{/* <Logo /> */} {">CYP_"}
							</a>
						</div>
					</div>
					<HeaderNav navHandler={this.navHandler} clickHandler={null} />
				</div>
				<HeaderSideBar
					show={this.state.headerDrawerOpen}
					navHandler={this.navHandler}
					clickHandler={this.headerDrawerStateSwitcher}
				/>
				<Backdrop show={this.state.headerDrawerOpen} clickHandler={this.headerBackdropRetrieve} />
			</section>
		);
	}
}

Header.propTypes = {
	navHandler: PropTypes.func
}

export default Header;
