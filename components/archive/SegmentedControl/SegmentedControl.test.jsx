// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SegmentedControl from "./SegmentedControl";

describe("Test Component", () => {
  let props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SegmentedControl {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SegmentedControl");

    expect(component).toHaveTextContent("harvey was here");
  });
});
