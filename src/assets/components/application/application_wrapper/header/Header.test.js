import React from 'react';
import { create } from "react-test-renderer";
import store from '../../../../../store';
import { Provider } from 'react-redux';
import Header from './Header.component';

describe("Header", () => {
  test("To display", () => {
    const component = create(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});