import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, useThemeMode } from ".";

test("ThemeProvider", () => {
  const onChangeMode = vi.fn();
  const Component = () => {
    const { mode, setMode, toggle } = useThemeMode();
    return (
      <>
        <p>Mode: {mode}</p>
        <button onClick={() => setMode("light")}>Light</button>
        <button onClick={() => setMode("dark")}>Dark</button>
        <button onClick={toggle}>Toggle</button>
      </>
    );
  };
  render(
    <ThemeProvider onChangeMode={onChangeMode}>
      <Component />
    </ThemeProvider>
  );
  // Default is "light" theme
  expect(screen.getByText(/mode: light/i)).toBeInTheDocument();
  // Switch to dark
  userEvent.click(screen.getByRole("button", { name: /dark/i }));
  expect(screen.getByText(/mode: dark/i)).toBeInTheDocument();
  expect(onChangeMode).toHaveBeenLastCalledWith("dark");
  // Switch to light
  userEvent.click(screen.getByRole("button", { name: /light/i }));
  expect(screen.getByText(/mode: light/i)).toBeInTheDocument();
  expect(onChangeMode).toHaveBeenLastCalledWith("light");
  // Toggle
  userEvent.click(screen.getByRole("button", { name: /toggle/i }));
  expect(screen.getByText(/mode: dark/i)).toBeInTheDocument();
  expect(onChangeMode).toHaveBeenLastCalledWith("dark");
});
