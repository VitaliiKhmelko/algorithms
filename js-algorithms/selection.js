// make a loop to find the lowest value. Put the value to the first position.
// make another loop to find the lowest element

const selectionSorting = () => {
  let iterations = 0;

  
  for (let loop = 0; loop < array.length; loop++) {
    let minimalPosition = loop;
    let minimal = array[minimalPosition];
  
    for (let index = 1 + loop; index < array.length; index++) {
      // find smallest element in array;
      if (array[index] < minimal) {
        minimal = array[index];
        minimalPosition = index;
      }
      
      iterations++;
    }
    
    array.splice(loop, 0, minimal);
    array.splice(minimalPosition + 1, 1);
    console.log(`now minimal is ${ minimal }`);
  }
  

  console.log(iterations)
  
  return array;
};
