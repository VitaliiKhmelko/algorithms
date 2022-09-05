// Improve bubble algorithm:
// 1. Avoid extra loop if only one unsorted element left (it was sorted before with other components)
// 2. Each next loop has a smaller amount of iterations because elements at the end of array are in their places
// 3. Stop looping if elements are already sorted.

const bubbleOptimizedSorting = () => {
  const arr = [5, 3, 7, 6, 8, 1, 2];
  // const arr = [1, 2, 3, 5, 6, 7, 8];
  let iterations = 0;

  console.log("initial array " + arr.join(", "));

  // Don't run a loop if only one component left. It is obvious that it was compared before
  for (let loop = 0; loop < arr.length - 1; loop++) {
    console.log(`Loop #${loop + 1}`);

    let swapsInLoop = 0;
    // Ignore elements that already been sorted and now are in their places at the end of array
    for (let index = 0; index < arr.length - loop - 1; index++) {
      iterations++;

      const elementAbove = arr[index];
      const elementBottom = arr[index + 1];

      if (elementBottom < elementAbove) {
        console.log(`swapping ${elementAbove} and ${elementBottom}`);
        arr[index] = elementBottom;
        arr[index + 1] = elementAbove;
        swapsInLoop++;
      } else {
        console.log(`don't swap ${elementAbove} and ${elementBottom}`);
      }
    }
    if (swapsInLoop === 0) {
      console.log("elements are sorted. Don't need to run other loops");
      break;
    }
    console.log(arr.join(", "));
  }

  console.log("sorted array " + arr.join(", "));
  console.log(`Elements count: ${arr.length}. Iterations: ${iterations}`);
};
