"use strict";

import PropTypes from "prop-types";

/* GENERIC COMPONENTS */

export const list = PropTypes.arrayOf(PropTypes.string).isRequired;

/* PROP-TYPE COMPONENTS */

export const email = PropTypes.string.isRequired;

export const location = PropTypes.shape({
	city: PropTypes.string,
	country: PropTypes.string,
	region: PropTypes.string,
}).isRequired;

export const profile = PropTypes.shape({
	network: PropTypes.string,
	url: PropTypes.url,
}).isRequired;

export const profiles = PropTypes.arrayOf(profile).isRequired;

export const project = PropTypes.shape({
	summary: PropTypes.string,
	highlights: list,
}).isRequired;

export const projects = PropTypes.arrayOf(project).isRequired;

export const link = PropTypes.shape({
	name: PropTypes.string,
	url: PropTypes.url,
}).isRequired;

export const links = PropTypes.arrayOf(link).isRequired;

export const award = PropTypes.shape({
	title: PropTypes.string,
	date: PropTypes.string,
	awarder: PropTypes.string,
	document: PropTypes.url,
}).isRequired;

export const language = PropTypes.shape({
	language: PropTypes.string,
	fluency: PropTypes.string,
}).isRequired;

export const interest = PropTypes.shape({
	name: PropTypes.string,
	keywords: list,
}).isRequired;

/* PROP-TYPE SETS */

export const basics = PropTypes.shape({
	name: PropTypes.string,
	age: PropTypes.number,
	label: PropTypes.string,
	email: email,
	target: PropTypes.string,
	summary: list,
	location: location,
	profiles: profiles,
}).isRequired;

export const work = PropTypes.shape({
	company: PropTypes.string,
	position: PropTypes.string,
	website: PropTypes.url,
	startDate: PropTypes.string,
	endDate: PropTypes.string,
	projects: projects,
}).isRequired;

export const workList = PropTypes.arrayOf(work).isRequired;

export const education = PropTypes.shape({
	institution: PropTypes.string.isRequired,
	area: PropTypes.string.isRequired,
	studyType: PropTypes.string.isRequired,
	startDate: PropTypes.string.isRequired,
	endDate: PropTypes.string.isRequired,
	description: list,
	links: links,
}).isRequired;

export const educationList = PropTypes.arrayOf(education).isRequired;

export const awardList = PropTypes.arrayOf(award).isRequired;

export const soft = PropTypes.shape({
	skill: PropTypes.string,
	eval: PropTypes.number,
}).isRequired;

export const softs = PropTypes.arrayOf(soft).isRequired;

export const technical = PropTypes.shape({
	category: PropTypes.string,
	skills: list,
}).isRequired;

export const technicals = PropTypes.arrayOf(technical).isRequired;

export const resource = PropTypes.shape({
	category: PropTypes.string,
	res: list,
}).isRequired;

export const resources = PropTypes.arrayOf(resource).isRequired;

export const languages = PropTypes.arrayOf(language).isRequired;

export const skills = PropTypes.shape({
	soft: softs,
	technical: technicals,
	resources: resources,
	languages: languages,
}).isRequired;

export const interests = PropTypes.arrayOf(interest).isRequired;
