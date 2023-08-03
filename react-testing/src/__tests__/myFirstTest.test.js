import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button";

describe("Testing Button Component", () => {
  // Check button is present on dom or not
  it("Check button is present on dom or not", () => {
    render(<Button>Testing Button</Button>);
    screen.debug();
    // const button = screen.getByText("Test Button");
    // expect(button).toBeInTheDocument();
  });

  it("", () => {});
  it("", () => {});
});

describe("Functioning of button", () => {
  it("", () => {});
});
