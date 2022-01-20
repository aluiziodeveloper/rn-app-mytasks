describe('Not method', () => {
  it('uso basico - not', () => {
    expect(1 + 1).not.toEqual(1);
  });
});

describe('Match - expressoes regulares', () => {
  it('uso basico - toMatch', () => {
    expect('developer').toMatch(/\w+/);
  });
});

export {};
