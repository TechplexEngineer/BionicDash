
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color|trueColor|falseColor)$/i,
      date: /Date$/,
    },
  },
}