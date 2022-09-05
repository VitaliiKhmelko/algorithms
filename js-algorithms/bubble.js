// Most inefficient sorting algorithm. It's called bubble because elements
// with small weight (1, 2, 3) bubble up, While heavier go down (8, 9)
// time complexity O(n^2)
// Auxiliary Space: O(1)

const bubbleSorting = () => {
  const arr = [5, 3, 7, 6, 8, 1, 2];
  let iterations = 0;

  console.log("initial array " + arr.join(", "));

  for (let loop = 0; loop < arr.length; loop++) {
    console.log(`Loop #${loop + 1}`);
    for (let index = 0; index < arr.length; index++) {
      iterations++;

      const elementAbove = arr[index];
      const elementBottom = arr[index + 1];

      if (elementBottom < elementAbove) {
        console.log(`swapping ${elementAbove} and ${elementBottom}`);
        arr[index] = elementBottom;
        arr[index + 1] = elementAbove;
      } else {
        console.log(`don't swap ${elementAbove} and ${elementBottom}`);
      }
    }
    console.log(arr.join(", "));
  }

  console.log("sorted array " + arr.join(", "));
  console.log(`Elements count: ${arr.length}. Iterations: ${iterations}`);
};
