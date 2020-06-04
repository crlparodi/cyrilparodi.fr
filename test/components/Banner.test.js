import React from "react";
import Banner from "root/components/Banner";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import * as Data from "data/resume.json";

describe("Banner", () => {
	it("renders without crashing", () => {
		const component = render(<Banner data={Data.basics} />);
	});

	it("renders correctly", () => {
		const { container } = render(<Banner data={Data.basics} />);
		expect(container).toBeTruthy();
	});

	it("goes to my github for example", () => {
		const data = Data.basics;
		const { container } = render(<Banner data={data} />);

		expect(container).toBeTruthy();

		const socialMedia = container.querySelector(".Contacts");

		const socialMediaToClick = socialMedia.querySelectorAll(".ob-link")[2];
		socialMediaToClick.click();
	});
});
