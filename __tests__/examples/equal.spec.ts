describe('Igualdade', () => {
  it('uso basico - toEqual', () => {
    expect(1 + 1).toEqual(2);
    expect('developer').toEqual('developer');
    expect({name: 'developer'}).toEqual({name: 'developer'});
  });

  it('uso basico - toBe', () => {
    expect(1 + 1).toBe(2);
    expect('developer').toBe('developer');
    expect({name: 'developer'}).toBe({name: 'developer'});
  });
});

export {};
