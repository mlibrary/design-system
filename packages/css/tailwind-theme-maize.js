const tokens = require("@umich-lib/tokens/dist/tokens.json");

/*
  Transform token colors into a shape
  that can be passed to Tailwind color config.

  eg:
  {
    'blue': {
      '100': 'var(--color-blue-100)',
      '200': 'var(--color-blue-200)',
      ...
    },
    'maize': {
      ...
    },
    ...
  }
*/
const colors = tokens.props
  .filter((token) => token.category === "color")
  .reduce((acc, token) => {
    const { palette, level } = token.meta;

    return {
      ...acc,
      [palette]: {
        ...acc[palette],
        [level]: `var(--${token.name})`,
      },
    };
  }, {});

const fontFamily = {
  sans: "var(--font-base-family)",
  serif: "var(--font-second-family)",
};

const borderRadius = "var(--radius-default)";

const tailwindThemeMaize = {
  colors,
  fontFamily,
  borderRadius,
};

module.exports = tailwindThemeMaize;
