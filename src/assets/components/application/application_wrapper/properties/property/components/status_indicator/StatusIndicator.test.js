import React from 'react';
import { create } from "react-test-renderer";

import StatusIndicator from './Error.component';

describe("Status indicator", () => {
  test("To display with current indicator", () => {
    const component = create(<StatusIndicator status="current" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("To display with off market indicator", () => {
    const component = create(<StatusIndicator status="off_market" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("To display with sold indicator", () => {
    const component = create(<StatusIndicator status="sold" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});