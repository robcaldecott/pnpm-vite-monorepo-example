import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from ".";

it("renders", () => {
  render(<Header>Content</Header>);
  expect(screen.getByRole("banner")).toHaveTextContent(/content/i);
});
