import React, { forwardRef } from "react";
import Paper, { PaperProps } from "@mui/material/Paper";
import Container from "@mui/material/Container";

export interface HeaderProps
  extends Omit<PaperProps, "elevation" | "square" | "component" | "variant"> {
  /** Shadow depth. */
  elevation?: number;
}

/**
 * Generic header component.
 *
 * Designed to sit at the top of the page directly below
 * the global header. Use this for page headings, a back
 * button, etc.
 *
 * Content will be rendered inside a `Container` with a
 * max width of 1280px.
 *
 * Render with `children` as the header content. Additional
 * props are spread onto the root `Paper` component.
 *
 * The component will be rendered as a HTML `header` element
 * with padding of `2` (corresponding to 1rem/16px).
 */
const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, elevation = 2, sx, ...props }, ref) => (
    <Paper
      ref={ref}
      component="header"
      square
      elevation={elevation}
      sx={{ padding: 2, ...sx }}
      {...props}
    >
      <Container disableGutters maxWidth="lg">
        {children}
      </Container>
    </Paper>
  )
);

export { Header };
