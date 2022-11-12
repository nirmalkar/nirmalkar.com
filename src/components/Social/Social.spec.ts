import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Social from "./index";
describe("Footer", () => {
  it("renders correctly", () => {
    const container = render(<Social />);
    expect(container).toMatchSnapshot();
  });
});
