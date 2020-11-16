// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Logo from "./Logo";

describe("Test Component", () => {
  let props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Logo {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Logo");

    expect(component).toHaveTextContent("harvey was here");
  });
});
