import React from 'react';
import { create } from "react-test-renderer";
import StartupSpinnerWrapper from './StartupSpinnerWrapper.component';

describe("Wrapper for the spinner shown while data is loading", () => {
  test("Not to display", () => {
    const component = create(<StartupSpinnerWrapper display={false} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("To display", () => {
    const component = create(<StartupSpinnerWrapper display={true} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});