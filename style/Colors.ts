export type ColorTheme = {
	primary: string;
	primaryForeground: string;
	secondary: string;
	textSecondary: string;
	textPrimary: string;
	accent: string;
};

const sharedColors = {
	black: "#000000",
	white: "#FFFFFF",
};

type SharedColors = typeof sharedColors;

type TColors = ColorTheme & SharedColors;

type ColorPalette = TColors;
const Colors: ColorPalette = {
	primary: "#003049",
	primaryForeground: "#669BBC",
	secondary: "#FCA311",
	textPrimary: "#FDF0D5",
	textSecondary: sharedColors.white,
	accent: "#780000",
	...sharedColors,
};

export default Colors;
