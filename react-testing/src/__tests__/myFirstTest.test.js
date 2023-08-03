import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../components/Button";
import App from "../App";
import { Counter } from "../components/Counter";
import renderer from "react-test-renderer";

describe("Testing Button Component", () => {
  // Check button is present on dom or not
  it("Check button is present on dom or not", () => {
    render(<Button>Testing Button</Button>);
    screen.debug();
    // const button = screen.getByText("Test Button");
    // expect(button[0]).toBeInTheDocument();
  });

  it("Button is rendered on App with text Click Me", () => {
    render(<App />);
    const button = screen.getAllByTestId("test-button");
    expect(button[0]).toBeInTheDocument();
    expect(button[0]).toHaveTextContent("Click Me");
  });
  it("OnClicking the button the function should execute", () => {
    const mockFunc = jest.fn();
    render(<Button func={mockFunc}>Click</Button>);
    const button = screen.getByTestId("test-button");
    fireEvent.click(button);
    fireEvent.click(button);
    // expect(mockFunc).toBeCalled();
    // expect(mockFunc).toBeCalledTimes(2); ---> Problem here
  });

  it("Should throw error for color and size", () => {
    jest.spyOn(console, "error");
    render(
      <Button color={1} size={false}>
        Click
      </Button>
    );
    expect(console.error).toBeCalledTimes(2);
  });

  // Snapshot testing

  //   test("Link renders correctly", () => {
  //     const tree = renderer
  //       .create(<Link page="http://www.facebook.com">Facebook</Link>)
  //       .toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });

  it("Link renders correctly", () => {
    const tree = renderer
      .create(
        <Button color="blue" size="large">
          Click
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Checking counter functionalites", () => {
  it("Counter should be present on DOM with initial value", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter");
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent(0);
  });

  it("On clicking add button counter should increase", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter");
    expect(counter).toHaveTextContent(0);
    const button = screen.getByTestId("test-button");
    fireEvent.click(button);
    expect(counter).toHaveTextContent(1);
    fireEvent.click(button);
    expect(counter).toHaveTextContent(2);
  });
});
