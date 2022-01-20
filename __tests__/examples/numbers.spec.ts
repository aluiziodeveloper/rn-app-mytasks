describe('Comparar numeros', () => {
  it('uso basico', () => {
    expect(1 + 1).toBeGreaterThan(1);
    expect(1 + 1).toBeGreaterThanOrEqual(1);

    expect(1 + 1).toBeLessThan(3);
    expect(1 + 1).toBeLessThanOrEqual(2);
  });
});

describe('Mock', () => {
  it('mock implementation', () => {
    const fakeAdd = jest.fn().mockImplementation((a, b) => 5);

    expect(fakeAdd(1, 1)).toBe(5);
  });
});

export {};
