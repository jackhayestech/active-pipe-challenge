import store from '../../store';

import { mockFetch } from './helpers/mock.helpers';
import { failedLoading, sucessfulLoad } from './data/properties.data'
import { loadProperties } from '../action_creators/Properties.actioncreator';

/**
 * Test loading of failed properties
 *
 * Expect Loading display to be false
 * Expect alert display to be true
 * Expect alert type to be error
 */
test('should fail loading property data', async () => {
  mockFetch(failedLoading);
  await store.dispatch(loadProperties());

  expect(store.getState().Ui.loadingDisplay).toEqual(false);
  expect(store.getState().Ui.alert.display).toEqual(true);
  expect(store.getState().Ui.alert.type).toEqual('error');

  //Reset state after test
  store.dispatch({ type: 'RESET' });
});

/**
 * Test loading of properties
 *
 * Expect Loading display to be false
 * Expect alert display to be false
 * Expect properties data to match expected
 */
test('should load property data', async () => {
  mockFetch(sucessfulLoad);
  await store.dispatch(loadProperties());

  expect(store.getState().Ui.loadingDisplay).toEqual(false);
  expect(store.getState().Ui.alert.display).toEqual(false);
  expect(store.getState().Properties.data).toEqual(sucessfulLoad);

  //Reset state after test
  store.dispatch({ type: 'RESET' });
});

