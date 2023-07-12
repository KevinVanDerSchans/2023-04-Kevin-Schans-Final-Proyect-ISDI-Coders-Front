/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  // roots: ["<rootDir>/src"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["dist", ".d.ts", ".js"],
  resolver: "jest-ts-webcompat-resolver",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/assetsMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/main.tsx",
    "<rootDir>/src/vite-env.d.ts",
    "<rootDir>/src/features/components/app/app.tsx",
    "<rootDir>/src/core/services/danceCourse.repository.ts",
    "<rootDir>/src/features/components/edit.form/edit.form.tsx",
    "<rootDir>/src/features/components/my.courses/list/danceCourse.details.page/danceCourse.details.page.tsx",
    "<rootDir>/src/features/components/form/danceCourse.create.form/danceCourse.create.form.tsx",
  ],
};
