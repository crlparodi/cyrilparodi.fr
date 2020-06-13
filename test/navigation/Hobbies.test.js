import React from "react";
import Hobbies from "root/navigation/Hobbies";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const testContent = {
	interests: [
		{
			name: "<NAME>",
			keywords: ["<KEYWORD_1>", "<KEYWORD_2>", "<KEYWORD_3>"],
		},
	],
};

const testContentWithoutData = {
	interests: [],
};

describe("Skills", () => {
	it("renders without crashing", () => {
		const component = render(<Hobbies data={testContent.interests} />);
	});

	it("renders correctly", () => {
		const { container } = render(<Hobbies data={testContent.interests} />);
		expect(container).toBeTruthy();
	});

	it("renders children correctly", () => {
		const { container } = render(<Hobbies data={testContent.interests} />);
		expect(container).toBeTruthy();

		expect(container.querySelector(".Hobby").firstChild).toBeTruthy();
		expect(container.querySelector(".Hobby").lastChild).toBeTruthy();
	});

	it("renders correctly even without interests explicited", () => {
		const { container } = render(<Hobbies data={testContentWithoutData.interests} />);
		expect(container).toBeTruthy();

		expect(container.querySelector(".Hobby")).toBe(null);
	});
});
