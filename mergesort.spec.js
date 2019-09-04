describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([1,2,3,4])).toEqual([[1,2], [3, 4]]);
    });

    it('is able to split odd number of elements', function() {
        expect(split([1,2,3,4,5])).toEqual([[1,2,3], [4,5]]);
    });
});

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([2], [1])).toEqual([1,2]);
    });
    it('is able to merge longer sorted arrays into one sorted array', function() {
        expect(merge([2,3,4], [1,5,6])).toEqual([1,2,3,4,5,6]);
    });
});

describe('MergeSort function', function(){
   it('sorts and merges two element array', function() {
       expect(mergeSort([2, 1])).toEqual([1,2]);
   });
   it('sorts and merges four element array', function() {
    expect(mergeSort([2,4,1,5])).toEqual([1,2,4,5])
   ;});

   it('sorts and merges five element array', function() {
       expect(mergeSort([2,4,1,3,5])).toEqual([1,2,3,4,5]);
    });
});