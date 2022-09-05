// make a loop to find the lowest value. Put the value to the first position.
// make another loop to find the lowest element

const selectionSorting = () => {
  const arr = [5, 3, 7, 6, 8, 1, 2];
  // const arr = [8, 7, 6, 5, 3, 2, 1];

  let iterations = 0;

  logs("initial array " + arr.join(", "));

  for (let loop = 0; loop < arr.length - 1; loop++) {
    logs("");

    logs(`Loop #${loop + 1}. Elements in loop ${arr.length - loop}`);

    let currentElementToCompare = arr[loop];
    let smallestElement = currentElementToCompare;
    let smallestElementIndex = 0;

    logs(
      `Take element with value ${currentElementToCompare} and compare with others.`
    );

    for (let index = loop; index < arr.length; index++) {
      iterations++;

      if (smallestElement > arr[index]) {
        smallestElement = arr[index];
        smallestElementIndex = index;
      }
    }

    logs(
      `Find the smallest element. Swap ${currentElementToCompare} (index: ${loop}) with ${arr[smallestElementIndex]} (index: ${smallestElementIndex}).`
    );

    arr[loop] = smallestElement;
    arr[smallestElementIndex] = currentElementToCompare;

    logs("now array is " + arr.join(", "));
  }

  logs("sorted array " + arr.join(", "));
  logs(`Elements count: ${arr.length}. Iterations: ${iterations}`);
};
