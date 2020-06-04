import React from "react";
import { render } from "@testing-library/react";
import Education from "root/navigation/Education";
import * as Data from "data/resume.json";

describe("Education", () => {
	it("renders correctly", () => {
		const { container } = render(<Education data={Data.education} />);
		expect(container).toBeTruthy();
	});
});
