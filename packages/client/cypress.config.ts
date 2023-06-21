import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: "tests/component/fixtures",
  screenshotsFolder: "tests/component/screenshots",
  downloadsFolder: "tests/component/downloads",
  videosFolder: "tests/component/videos",

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    supportFile: 'tests/component/support/component.ts',
		indexHtmlFile: 'tests/component/support/component-index.html',
    specPattern: "**/*.cy.ts",
  },
});
