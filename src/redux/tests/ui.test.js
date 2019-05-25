import store from '../../store';

import { toggleLoading, setAlert } from '../action_creators/ui.actioncreator';

/**
 * Test toggling of loading spinner
 *
 * Expect loading spinner to display as expected.
 */
test('should display the loading spinner as expected', async () => {
  expect(store.getState().Ui.loadingDisplay).toEqual(true);
  
  await store.dispatch(toggleLoading(false));
  expect(store.getState().Ui.loadingDisplay).toEqual(false);

  await store.dispatch(toggleLoading(true));
  expect(store.getState().Ui.loadingDisplay).toEqual(true);

  //Reset state after test
  store.dispatch({ type: 'RESET' });
});

/**
 * Test setting alert to error
 *
 * Expect alert display to be false
 * Expect alert display to be true
 * Expect alert type to be error
 */
test('should display error alert', async () => {
  expect(store.getState().Ui.alert.display).toEqual(false);

  await store.dispatch(setAlert({
    display: true,
    type: 'error',
  }));

  expect(store.getState().Ui.alert.display).toEqual(true);
  expect(store.getState().Ui.alert.type).toEqual('error');

  //Reset state after test
  store.dispatch({ type: 'RESET' });
});

