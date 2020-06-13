import React from "react";
import { render } from "@testing-library/react";
import Certifications from "root/navigation/Certifications";

const testContent = {
	awards: [
		{
			title: "Software Engineer Certification Level 1",
			date: "2005",
			awarder: "<AWARDER>",
			document: "<URL>",
		},
		{
			title: "Software Engineer Certification Level 1",
			date: "2007",
			awarder: "<AWARDER>",
			document: "<URL>",
		},
	],
};

describe("Certifications", () => {
	it("renders without crashing", () => {
		const component = render(<Certifications data={testContent.awards} />);
	});

	it("renders correctly", () => {
		const { container } = render(<Certifications data={testContent.awards} />);
		expect(container).toBeTruthy();
		expect(container.querySelector(".Entry").firstChild).toBeTruthy();
		expect(container.querySelector(".Entry").lastChild).toBeTruthy();
	});
});
