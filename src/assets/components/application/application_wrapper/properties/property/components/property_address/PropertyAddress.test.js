import React from 'react';
import { create } from "react-test-renderer";

import PropertyAddress from './PropertyAddress.component';

describe("Property Address", () => {
  test("To display", () => {
    const component = create(
      <PropertyAddress
        street="street"
        suburb="suburb"
        state="state"
        postcode="postcode"
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});