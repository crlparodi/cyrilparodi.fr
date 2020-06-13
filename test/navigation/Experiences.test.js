import React from "react";
import { render } from "@testing-library/react";
import Experiences from "root/navigation/Experiences";

const testContent = {
	works: [
		{
			company: "Company_1",
			position: "Software Engineer",
			website: "company1.com",
			startDate: "January 1990",
			endDate: "May 2000",
			projects: [
				{
					summary: "<SUMMARY>",
					highlights: [],
				},
			],
		},
		{
			company: "Company_2",
			position: "Software Engineer",
			website: "company1.com",
			startDate: "May 2000",
			endDate: "June 2019",
			projects: [
				{
					summary: "<SUMMARY>",
					highlights: [],
				},
			],
		},
	],
};

describe("Experiences", () => {
	it("renders without crashing", () => {
		const component = render(<Experiences data={testContent.works} />);
	});

	it("renders correctly", () => {
		const { container } = render(<Experiences data={testContent.works} />);
		expect(container).toBeTruthy();
		expect(container.querySelector(".Left-Colon")).toBeTruthy();
		expect(container.querySelector(".Right-Colon")).toBeTruthy();
	});
});
