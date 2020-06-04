module.exports = {
	setupFilesAfterEnv: [
		"@testing-library/jest-dom",
		"@testing-library/react",
		"<rootDir>/test/setup.js",
	],
	moduleFileExtensions: ["js", "scss", "html"],
	moduleNameMapper: {
		"\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)":
			"<rootDir>/__mocks__/fileMock.js",
		"\\.(css|less)$1": "<rootDir>/__mocks__/styleMock.js",
		"^modules(.*)$": "<rootDir>/node_modules$1",
		"^root(.*)$": "<rootDir>/src$1",
		"^styles(.*)$": "<rootDir>/styles$1",
		"^img(.*)$": "<rootDir>/img$1",
		"^data(.*)$": "<rootDir>/data$1",
		"^test(.*)$": "<rootDir>/test$1",
	},
	testMatch: ["<rootDir>/test/**/?(*.)(spec|test).js"],
	testPathIgnorePatterns: ["<rootDir>/(node_modles|bin|build)"],
};
