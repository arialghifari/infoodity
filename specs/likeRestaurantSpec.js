const sum = (a, b) => a + b;

// arrange
// act
// assert (expectation)

describe('Liking a Restaurant', () => {
  it('should return a + b value', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
