import React from "react";
import { render } from "@testing-library/react";
import Experiences from "root/navigation/Experiences";
import * as Data from "data/resume.json";

describe("Experiences", () => {
	it("renders without crashing", () => {
		const component = render(<Experiences data={Data.works} />);
	});

	it("renders correctly", () => {
		const { container } = render(<Experiences data={Data.works} />);
		expect(container).toBeTruthy();
	});
});
