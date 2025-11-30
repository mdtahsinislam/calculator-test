const add = require('./calculator');

test('adds 5 + 10 to equal 15', () => {
  expect(add(5, 10)).toBe(15);
});
