import React from "react";
import About from "root/navigation/About";
import { render } from "@testing-library/react";
import * as Data from "data/resume.json";

describe("About", () => {
	it("renders without crashing", () => {
		const component = render(<About data={Data.basics} />);
	});

	it("renders correctly", () => {
		const { container } = render(<About data={Data.basics} />);
		expect(container).toBeTruthy();
	});
});
