import React from 'react';
import { create } from "react-test-renderer";

import PropertyStatus from './PropertyStatus.component';

describe("Property status", () => {
  test("To display", () => {
    const component = create(<PropertyStatus status='' />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});