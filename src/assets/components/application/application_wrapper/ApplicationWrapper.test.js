import React from 'react';
import { create } from "react-test-renderer";
import { Provider } from 'react-redux';
import store from '../../../../store';
import ApplicationWrapper from './ApplicationWrapper.component';

const testProp = [{
  "id": 1,
  "status": "current",
  "street": "1 Fake Street",
  "suburb": "Glen Iris",
  "state": "VIC",
  "postcode": "3146",
  "price": 1230500,
  "image": "https://code-challenge.activepipe.com/property-images/frontage/01.jpg"
},];

describe("The wrapper for the application", () => {
  test("No properties displayed", () => {
    const component = create(
      <Provider store={store}>
        <ApplicationWrapper />
      </Provider>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("No properties found", () => {
    const component = create(
      <Provider store={store}>
        <ApplicationWrapper properties={[]}/>
      </Provider>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});