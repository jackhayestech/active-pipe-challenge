import React from 'react';
import { create } from "react-test-renderer";

import ErrorMessage from './Error.component';

describe("Error alert message", () => {
  test("To display", () => {
    const component = create(<ErrorMessage />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});