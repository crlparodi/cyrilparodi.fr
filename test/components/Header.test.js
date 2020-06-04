import React from "react";
import ReactDOM from "react-dom";
import Header from "root/components/Header";
import HeaderToggleButton from "../../src/components/header/HeaderToggleButton";
import { render } from "@testing-library/react";
import { mount } from "enzyme";
import "@testing-library/jest-dom/extend-expect";

describe("Header", () => {
	it("renders without crash", () => {
		ReactDOM.render(<Header />, document.createElement("div"));
	});

	it("renders correctly", () => {
		const { container } = render(<Header />);

		expect(container).toBeTruthy();
	});

	it("displays on desktop mode", () => {
		const { container } = render(<Header />);
		const desktopHeaderNav = ".Nav";

		expect(container).toBeTruthy();
		expect(container.querySelector(desktopHeaderNav)).toBeTruthy();
		expect(container.querySelector(desktopHeaderNav)).toBeEnabled();
	});

	it("displays on mobile mode", () => {
		const { container } = render(<Header />);
		const desktopHeaderNav = ".Nav";

		Object.defineProperty(window, "innerWidth", {
			writable: true,
			configurable: true,
			value: 1023,
		});

		expect(container).toBeTruthy();
		expect(container.querySelector(desktopHeaderNav)).toBeTruthy();
		expect(container.querySelector(desktopHeaderNav)).not.toBeDisabled();
		expect(container.querySelector(".HeaderToggle")).toBeEnabled();
	});

	it("displays sidebar on mobile mode", () => {
		const { container } = render(<Header />);

		Object.defineProperty(window, "innerWidth", {
			writable: true,
			configurable: true,
			value: 1023,
		});

		const mockFunction = jest.fn();
		const toggleComponent = mount(<HeaderToggleButton onClick={mockFunction} />);

		toggleComponent.simulate("click");

		const desktopHeaderSideBar = container.querySelector(".SideBar");

		expect(container).toBeTruthy();
		expect(desktopHeaderSideBar).toBeTruthy();
		expect(desktopHeaderSideBar).toBeEnabled();
	});
});
