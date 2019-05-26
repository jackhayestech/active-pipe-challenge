import React from 'react';
import { create } from "react-test-renderer";

import Property from './Property.component';

describe("Property", () => {
  test("To display", () => {
    const component = create(
      <Property
        status='status'
        street='street'
        suburb='suburb'
        postcode='postcode'
        price='price'
        image=''
      />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});