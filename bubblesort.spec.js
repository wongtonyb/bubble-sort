describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles one item in array', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it('handles one complete for loop iteration of multiple items in array', function() {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(bubbleSort([2, 1, 3, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });
  it('handles multiple iterations', function() {
    expect(bubbleSort([5, 2, 1, 3, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort(['d', 'b', 'c', 'a', 'e'])).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
    ]);
  });
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });
  it('returns exact number of swaps for one complete for loop iteration', function() {
    bubbleSort([3, 1, 2]);
    expect(swap.calls.count()).toEqual(2);
  });
  it('returns exact number of swaps', function() {
    bubbleSort([3, 2, 1]);
    expect(swap.calls.count()).toEqual(3);
  });
});
