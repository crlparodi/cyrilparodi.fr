import React from "react";
import About from "root/navigation/About";
import { render } from "@testing-library/react";

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
		],
	},
};

describe("About", () => {
	it("renders without crashing", () => {
		const component = render(<About data={testContent.data} />);
	});

	it("renders correctly", () => {
		const { container } = render(<About data={testContent.data} />);
		expect(container).toBeTruthy();
		expect(container.querySelector(".Self-p").firstChild).toBeTruthy();
		expect(container.querySelector(".Self-list")).toBeTruthy();
	});
});
