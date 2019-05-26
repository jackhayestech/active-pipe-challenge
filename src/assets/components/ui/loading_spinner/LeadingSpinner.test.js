import React from 'react';
import { create } from "react-test-renderer";

import LoadingSpinner from './Alert.component';

describe("The loading spinner", () => {
  test("Should display correctly", () => {
    const component = create(<LoadingSpinner />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});