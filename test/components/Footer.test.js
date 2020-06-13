import React from "react";
import ReactDOM from "react-dom";
import Footer from "root/components/Footer";
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
		],
	},
};

describe("Footer", () => {
	it("renders without crash", () => {
		ReactDOM.render(<Footer data={testContent.data} />, document.createElement("div"));
	});

	it("renders correctly", () => {
		const { container } = render(<Footer data={testContent.data} />);

		expect(container).toBeTruthy();
	});
});
