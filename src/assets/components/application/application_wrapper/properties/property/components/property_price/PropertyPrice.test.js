import React from 'react';
import { create } from "react-test-renderer";

import PropertyPrice from './PropertyPrice.component';

describe("Property price", () => {
  test("To display", () => {
    const component = create(<PropertyPrice price={999} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});