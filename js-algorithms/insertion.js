const insertionSorting = () => {
  if (!Array.isArray(array)) {
    throw 'Input argument should be array of numbers'
  }
    // find smallest element
    for (let loop = 0; loop < array.length; loop++) {
      let minimalIndex = loop;
      let minimal = array[minimalIndex];

      array.slice(loop).reduce((prev, current, index) => {
        if (minimal > current) {
          minimal = current;
          minimalIndex = index + loop;
        }
      }, minimal);
      
      console.log(`Minimal is ${ minimal }`);
      
      array.splice(minimalIndex, 1);
      array.splice(loop, 0, minimal);
    }
    
    return array;
};
