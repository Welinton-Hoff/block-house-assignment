import { render, screen } from "@testing-library/react-native";

import { App } from "src/App";

test("renders correctly", async () => {
  render(<App />);
  const textElement = await screen.findByText("Block House");
  expect(textElement).toBeTruthy();
});
