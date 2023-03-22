import { initializeTimes, updateTimes } from './Main';

test('initializeTimes', () => {
    const t1 = initializeTimes();
    const t2 = initializeTimes();
    expect(t1).toEqual(t2);
})

test('updateTimes', () => {
  const date = new Date();
  const t1 = updateTimes([], {type: 'update', date: date})
  const t2 = updateTimes([], {type: 'update', date: date})
  expect(t1).toEqual(t2);
})