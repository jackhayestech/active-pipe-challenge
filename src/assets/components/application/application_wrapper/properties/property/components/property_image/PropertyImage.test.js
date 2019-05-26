import React from 'react';
import { create } from "react-test-renderer";

import PropertyImage from './PropertyImage.component';

describe("Property Image", () => {
  test("To display", () => {
    const component = create(<PropertyImage imageSrc="" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});