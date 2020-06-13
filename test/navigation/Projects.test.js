import React from "react";
import Projects from "root/navigation/Projects";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const testContent = {
	data: {
		summary: ["I am young", "I am dynamic", "I am proactive"],
		age: 99,
		label: "Engineer",
		target: "Software Engineer",
		location: {
			city: "Paris",
			region: "Île-de-France",
			country: "France",
		},
		email: "email@email.com",
		profiles: [
			{
				network: "linkedin",
				url: "linkedin.com/unknown",
			},
			{
				network: "github",
				url: "github.com/unknown",
			},
		],
	},
};

const testContentProjects = {
	projects: [
		{
			name: "<NAME>",
			description: "<DESCRIPTION>",
			url: "<URL>",
		},
	],
};

const testContentWithoutProjects = {
	projects: [],
};

describe("Skills", () => {
	it("renders without crashing", () => {
		const component = render(
			<Projects data={testContent.data} projects={testContentProjects.projects} />,
		);
	});

	it("renders correctly", () => {
		const { container } = render(
			<Projects data={testContent.data} projects={testContentProjects.projects} />,
		);
		expect(container).toBeTruthy();

		expect(container.querySelector(".Github")).toBeTruthy();
	});

	it("renders children correctly", () => {
		const { container } = render(
			<Projects data={testContent.data} projects={testContentProjects.projects} />,
		);
		expect(container).toBeTruthy();

		expect(container.querySelector(".Entry").firstChild).toBeTruthy();
		expect(container.querySelector(".Entry").lastChild).toBeTruthy();

		expect(container.querySelector(".Github")).toBeTruthy();
	});

	it("renders correctly even without projects explicited", () => {
		const { container } = render(
			<Projects data={testContent.data} projects={testContentWithoutProjects.projects} />,
		);
		expect(container).toBeTruthy();

		expect(container.querySelector(".Entry")).toBe(null);

		expect(container.querySelector(".Github")).toBeTruthy();
	});
});
