// Most inefficient sorting algorithm. It's called bubble because elements
// with small weight (1, 2, 3) bubble up, While heavier go down (8, 9)
// time complexity O(n^2)
// Auxiliary Space: O(1)

const bubbleSorting = () => {
  const arr = [5, 3, 7, 6, 8, 1, 2];
  let iterations = 0;

  logs("initial array " + arr.join(", "));

  for (let loop = 0; loop < arr.length; loop++) {
    logs(`Loop #${loop + 1}`);
    for (let index = 0; index < arr.length; index++) {
      iterations++;

      const elementAbove = arr[index];
      const elementBottom = arr[index + 1];

      if (elementBottom < elementAbove) {
        logs(`swapping ${elementAbove} and ${elementBottom}`);
        arr[index] = elementBottom;
        arr[index + 1] = elementAbove;
      } else {
        logs(`don't swap ${elementAbove} and ${elementBottom}`);
      }
    }
    logs(arr.join(", "));
  }

  logs("sorted array " + arr.join(", "));
  logs(`Elements count: ${arr.length}. Iterations: ${iterations}`);
};
