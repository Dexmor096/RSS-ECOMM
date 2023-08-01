import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home"; // Путь до вашего компонента Home

describe("Home component", () => {
  it("should render correctly", () => {
    const { getByText, getByAltText } = render(<Home />);

    const getStartedText = getByText(/Get started by editing/i);
    const nextLogo = getByAltText(/Next.js Logo/i);

    expect(getStartedText).toBeInTheDocument();
    expect(nextLogo).toBeInTheDocument();
  });
});
