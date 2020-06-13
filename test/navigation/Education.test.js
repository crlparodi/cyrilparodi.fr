import React from "react";
import { render } from "@testing-library/react";
import Education from "root/navigation/Education";

const testContent = {
	education: [
		{
			institution: "Institute of Technology",
			area: "France",
			studyType: "Engineer Degree",
			startDate: "1988",
			endDate: "1989",
			description: ["Engineering Degree", "Software Engineering"],
			links: [],
		},
	],
};

describe("Education", () => {
	it("renders without crashing", () => {
		const component = render(<Education data={testContent.education} />);
	});

	it("renders correctly", () => {
		const { container } = render(<Education data={testContent.education} />);
		expect(container).toBeTruthy();
		expect(container.querySelector(".Entry-L")).toBeTruthy();
		expect(container.querySelector(".Entry-R")).toBeTruthy();
	});
});
