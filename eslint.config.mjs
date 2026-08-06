import nextConfig from "next/eslint/camera-ready";
import { flatten } from "eslint-define-config";
import { resolve } from "path";

module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    // Override specific rules as needed in the project
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "**/local_files/**",
  ],
};