import React from 'react';
import { create } from "react-test-renderer";

import Filter from './Filter.component';

describe("The filter dropdown", () => {
  test("To display", () => {
    const component = create(<Filter />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});