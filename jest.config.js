module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testEnvironment: "node",
  setupFiles: [
    "<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js",
  ],
  moduleNameMapper: {
    "^expo-font$": "<rootDir>/__mocks__/expo-font.js",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js", // Mock image files
  },
};
