import React from "react";
import Skills from "root/navigation/Skills";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const testContent = {
	skills: {
		soft: [
			{
				skill: "<SKILL>",
				eval: 5,
			},
		],
		technical: [
			{
				category: "<CATEGORY>",
				skills: ["<SKILLS>"],
			},
		],
		resources: [
			{
				category: "<CAT>",
				res: ["<RES_1>", "<RES_2>"],
			},
		],
		languages: [
			{
				language: "<LANGUAGE>",
				fluency: "<LEVEL>",
			},
		],
	},
};

const testContentWithoutTechnical = {
	skills: {
		soft: [
			{
				skill: "<SKILL>",
				eval: 5,
			},
		],
		technical: [],
		resources: [
			{
				category: "<CAT>",
				res: ["<RES_1>", "<RES_2>"],
			},
		],
		languages: [
			{
				language: "<LANGUAGE>",
				fluency: "<LEVEL>",
			},
		],
	},
};

const testContentWithoutSoft = {
	skills: {
		soft: [],
		technical: [
			{
				category: "<CATEGORY>",
				skills: ["<SKILLS>"],
			},
		],
		resources: [
			{
				category: "<CAT>",
				res: ["<RES_1>", "<RES_2>"],
			},
		],
		languages: [
			{
				language: "<LANGUAGE>",
				fluency: "<LEVEL>",
			},
		],
	},
};

const testContentWithoutLanguage = {
	skills: {
		soft: [
			{
				skill: "<SKILL>",
				eval: 5,
			},
		],
		technical: [
			{
				category: "<CATEGORY>",
				skills: ["<SKILLS>"],
			},
		],
		resources: [
			{
				category: "<CAT>",
				res: ["<RES_1>", "<RES_2>"],
			},
		],
		languages: [],
	},
};

describe("Skills", () => {
	it("renders without crashing", () => {
		const component = render(<Skills data={testContent.skills} />);
	});

	it("renders correctly", () => {
		const { container } = render(<Skills data={testContent.skills} />);
		expect(container).toBeTruthy();
	});

	it("renders technical skills correctly", () => {
		const { container } = render(<Skills data={testContent.skills} />);
		expect(container.querySelector(".TechnicalSkills")).toBeTruthy();

		/* Expecting the display of all the technical skills */
		expect(container.querySelector(".TechnicalSkill").firstChild).toBeTruthy();
		expect(container.querySelector(".TechnicalSkill-category")).toBeTruthy();
		expect(container.querySelector(".TechnicalSkill-skills").firstChild).toBeTruthy();
		expect(container.querySelector(".TechnicalSkill-skills").lastChild).toBeTruthy();

		expect(container.querySelector(".TechnicalSkill").lastChild).toBeTruthy();
	});

	it("renders technical skills correctly even without skills explicited", () => {
		const { container } = render(<Skills data={testContentWithoutTechnical.skills} />);
		expect(container.querySelector(".TechnicalSkills")).toBeTruthy();

		expect(container.querySelector(".TechnicalSkill")).toBe(null);
	});

	it("renders soft skills correctly", () => {
		const { container } = render(<Skills data={testContent.skills} />);
		expect(container.querySelector(".SoftSkills")).toBeTruthy();

		/* Expecting the display of all the technical skills */
		expect(container.querySelector(".SoftSkill").firstChild).toBeTruthy();
		expect(container.querySelector(".SoftSkill-skill").firstChild).toBeTruthy();
		expect(container.querySelector(".SoftSkill-skill").lastChild).toBeTruthy();

		expect(container.querySelector(".SoftSkill").lastChild).toBeTruthy();
	});

	it("renders soft skills correctly even without skills explicited", () => {
		const { container } = render(<Skills data={testContentWithoutSoft.skills} />);
		expect(container.querySelector(".SoftSkills")).toBeTruthy();

		expect(container.querySelector(".SoftSkill")).toBe(null);
	});

	it("renders language skills correctly", () => {
		const { container } = render(<Skills data={testContent.skills} />);
		expect(container.querySelector(".Languages")).toBeTruthy();

		/* Expecting the display of all the technical skills */
		expect(container.querySelector(".Language").firstChild).toBeTruthy();
		expect(container.querySelector(".Language-language").firstChild).toBeTruthy();
		expect(container.querySelector(".Language-fluency").firstChild).toBeTruthy();
		expect(container.querySelector(".Language-language").lastChild).toBeTruthy();
		expect(container.querySelector(".Language-fluency").lastChild).toBeTruthy();

		expect(container.querySelector(".Language").lastChild).toBeTruthy();
	});

	it("renders language skills correctly even without skills explicited", () => {
		const { container } = render(<Skills data={testContentWithoutLanguage.skills} />);
		expect(container.querySelector(".Languages")).toBeTruthy();

		expect(container.querySelector(".Language")).toBe(null);
	});
});
