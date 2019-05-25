import React from 'react';
import { create } from "react-test-renderer";
import { Provider } from 'react-redux';
import store from '../../../../store';
import Alert from './Alert.component';

describe("The message alert item", () => {
  test("Not to display", () => {
    const component = create(<Alert display={false} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("To display error message", () => {
    const component = create(
      <Provider store={store}>
        <Alert display={true} type="error" />
      </Provider>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});